import Input from "../ui/input/Input";
import LoaderMini from '../ui/loaders/LoaderMini'

export default function EnrichForm({loading, cardEnrich}) {

   const {notes, pos, synonyms, examples} = cardEnrich;

    return (
        <div>
            {loading ? (
                <LoaderMini />
            )
            : (
                <div>
                    <Input value={notes}/>
                    <Input value={pos} disabled={true}/>
                    <Input value={synonyms}/>
                    <Input value={examples}/>
                </div>
                )
            }
        </div>
    )
}