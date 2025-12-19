import { useState, useEffect } from 'react';
import AddWordForm from '../../components/dictionary/AddWordForm';
import ShowWordForm from '../../components/dictionary/ShowWordForm';
import Modal from '../../components/ui/modals/modal';
import useDictionary from '../../hooks/useDictionary';
import useTags from '../../hooks/useTags';
import LoaderMini from '../../components/ui/loaders/LoaderMini';
import Select from '../../components/ui/select/Select';
import { formatArrayToOptions } from '../../utils/formatForSelect';
import styles from './dictionary.module.scss';
import Button from "../../components/ui/button/Button";
import { NotificationService } from "../../services/notificationService";
import { Status } from "../../types/statuses";
import ToggleSwitch from "../../components/ui/checkboxes/ToggleSwitch";
import { Archive } from "lucide-react";
import {AddWordInput, Word} from "../../types/words"

export default function DictionaryPage() {
    const [selectedTag, setSelectedTag] = useState<string>('');
    const [isOpenModalAddWord, setIsOpenModalAddWord] = useState<boolean>(false);
    const [isOpenModalUpdateWord, setIsOpenModalUpdateWord] = useState<boolean>(false);
    const [isShowTranslate, setIsShowTranslate] = useState<boolean>(false);
    const [isShowArchive, setIsShowArchive] = useState<boolean>(false);
    const [editedWord, setEditedWord] = useState<Word | null>(null);

    const {
        words,
        addWord,
        deleteWord,
        loadingWords,
        fetchWords,
        updateWord,
    } = useDictionary();

    const {
        tags,
        loadingTags,
        fetchTags,
    } = useTags();

    useEffect(() => {
        void fetchWords(selectedTag, isShowArchive);
    }, [selectedTag, isShowArchive]);

    useEffect(() => {
        void fetchTags(isShowArchive);
    }, [words, isShowArchive]);

    useEffect(() => {
        setSelectedTag('');
    }, [isShowArchive]);

    const tagOptions = formatArrayToOptions(tags, true, 'Все слова');

    const onClickOpenUpdateWord = (word:Word) => {
        setEditedWord(word);
        setIsOpenModalUpdateWord(!isOpenModalUpdateWord);
    }

    const onClickUpdateWord = async (data:AddWordInput) => {
        if (editedWord?.id) {
            try {
                await updateWord(editedWord.id, data);
                setIsOpenModalUpdateWord(false);
                NotificationService.notify(`Слово отредактировано!`, Status.Success);
            } catch (e) {
                NotificationService.notify(`Произошла ошибка`, Status.Error);
            }
        } else {
            NotificationService.notify(`Слово не найдено`, Status.Error);
        }
    }

    const onClickAddWord = async (data:AddWordInput) => {
        try {
            await addWord(data);
            setIsOpenModalAddWord(false);
            NotificationService.notify(`Слово добавлено!`, Status.Success);
        } catch (e) {
            NotificationService.notify(`Произошла ошибка`, Status.Error);
        }
    }

    const archiveWord = async (id:number, is_archive:boolean) => {
        try {
            await updateWord(id, {is_archived: is_archive});
            NotificationService.notify(is_archive ? `Слово добавлено в архив!` : 'Слово вернулось в словарь', Status.Success);
        } catch (error) {
            NotificationService.notify(`Произошла ошибка`, Status.Error);
        }

       void fetchWords(selectedTag ?? selectedTag, isShowArchive);
    }

    return (
        <div className="container">
            <div className={styles.header}>
                <div className="title title--h2 mb-md">
                    {isShowArchive ? 'Архив' : 'Словарь'}
                </div>
                <div className={styles.buttons}>
                    <Button onClick={() => setIsOpenModalAddWord(!isOpenModalAddWord)}>+ Добавить слово</Button>
                    <Button
                        onClick={() => setIsShowArchive(!isShowArchive)}
                        type={isShowArchive ? 'primary' : 'secondary'}
                    >
                        <Archive
                            size={16}
                            strokeWidth={1.75}
                        />
                    </Button>
                </div>
            </div>
            <div className={styles.tags}>
                <ToggleSwitch
                    checked={isShowTranslate}
                    label="Показывать перевод"
                    onChange={() => {setIsShowTranslate(!isShowTranslate)}}
                />
                {tags.length > 0 && (
                    <Select
                        options={tagOptions}
                        value={selectedTag}
                        onChange={setSelectedTag}
                        placeholder="Выберите тэг"
                    />
                )}
            </div>

            {(loadingWords || loadingTags) && <LoaderMini />}

            {!loadingWords && words.length === 0 && (
                <div className={styles.empty}>
                    Пока слов нет. Добавь своё первое слово!
                </div>
            )}

            {!loadingWords &&
                words.map((word) => (
                    <ShowWordForm
                        key={word.id}
                        word={word.word}
                        translation={word.translation}
                        description={word.description}
                        tags={word.tags}
                        isArchived={word.is_archived}
                        isShowTranslate={isShowTranslate}
                        onClickTag={setSelectedTag}
                        onClickUpdate={() => onClickOpenUpdateWord(word)}
                        deleteWord={() => deleteWord(word.id)}
                        archiveWord={() => archiveWord(word.id, !word.is_archived )}
                    />
                ))}

            <div>
                <Modal
                    isOpen={isOpenModalUpdateWord}
                    onClose={() => setIsOpenModalUpdateWord(!isOpenModalUpdateWord)}
                    title="Редактирование слова"
                >
                    <AddWordForm
                        editedWord={editedWord}
                        onReset={() => setIsOpenModalUpdateWord(!isOpenModalUpdateWord)}
                        onSubmit={onClickUpdateWord}
                        submitButtonText='Изменить слово'
                        resetButtonText='Отмена'
                    />
                </Modal>
                <Modal
                    isOpen={isOpenModalAddWord}
                    onClose={() => setIsOpenModalAddWord(!isOpenModalAddWord)}
                    title="Создание слова"
                >
                    <AddWordForm
                        onSubmit={onClickAddWord}
                    />
                </Modal>
            </div>
        </div>
    );
}

