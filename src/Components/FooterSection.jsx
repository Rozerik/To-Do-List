import Button from "./Button";

export default function FooterSection({clearTasks}) {
    return (
        <footer>
            <Button onClick={clearTasks}>Clear all</Button>
        </footer>
    )
}