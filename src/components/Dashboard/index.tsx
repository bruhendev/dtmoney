import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { Container } from "./syles";

export function Dashborad() {
    return (
        <Container>
            <Summary></Summary>
            <TransactionsTable />
        </Container>
    );
}