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

export default function DictionaryPage() {
    const [selectedTag, setSelectedTag] = useState<string>('');
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [isShowTranslate, setIsShowTranslate] = useState<boolean>(false);

    const {
        words,
        addWord,
        deleteWord,
        loadingWords,
        fetchWords,
    } = useDictionary();

    const {
        tags,
        loadingTags,
        errorTags,
        fetchTags,
    } = useTags();

    useEffect(() => {
        void fetchWords(selectedTag);
    }, [selectedTag]);

    useEffect(() => {
        void fetchTags();
    }, [words]);

    const tagOptions = formatArrayToOptions(tags, true, 'Все слова');

    const onResultAddWord = (status) => {
        if (status === Status.Success) {
            setIsOpenModal(!isOpenModal);
            NotificationService.notify(`Слово добавлено!`, Status.Success);
        } else {
            NotificationService.notify(`Произошла ошибка`, Status.Error);
        }
    }

    return (
        <div className="container">
            <div className={styles.header}>
                <div className="title title--h2 mb-md">Словарь</div>
                <Button onClick={() => setIsOpenModal(!isOpenModal)}>+ Добавить слово</Button>
            </div>

            <div className="mb-sm">
                <Modal
                    isOpen={isOpenModal}
                    onClose={() => setIsOpenModal(!isOpenModal)}
                    title="Создание слова"
                >
                    <AddWordForm
                        onSubmit={addWord}
                        onResult={(status) => onResultAddWord(status)}
                    />
                </Modal>
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
                        isShowTranslate={isShowTranslate}
                        onClickTag={setSelectedTag}
                        deleteWord={() => deleteWord(word.id)}
                    />
                ))}
        </div>
    );
}

