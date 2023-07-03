import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Image,
  TableSection,
  Table,
  Header,
  SubItems,
  ButtonContainer,
} from "./ApiDetailsStyle";
import { Button } from "../components/Button/Button";

function ApiDetails(props: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const logo = state["info"]["x-logo"]["url"];

  return (
    <Container>
      <Header className="header">
        <div>{logo ? <Image src={`${logo}`} alt="logo" /> : ""}</div>
        <div>{state.info.title}</div>
      </Header>
      <SubItems $size={"22px"} $marginBottom={"10px"}>
        Description
      </SubItems>

      <SubItems $size={"16px"} $marginBottom={"50px"}>
        {state.info.description ?? "Nil"}
      </SubItems>
      <SubItems $size={"22px"} $marginBottom={"10px"}>
        Swagger
      </SubItems>
      <SubItems $size={"16px"} $marginBottom={"50px"}>
        {state.swaggerUrl ?? "Nil"}
      </SubItems>
      <SubItems $size={"22px"} $marginBottom={"10px"}>
        Contact
      </SubItems>
      <div>
        <Table className="table">
          {state.info.contact ? (
            <>
              {state.info.contact.email && (
                <>
                  <TableSection $span={1}>Email</TableSection>
                  <TableSection $span={7}>
                    {state.info.contact?.email}
                  </TableSection>
                </>
              )}
              {state.info.contact.name && (
                <>
                  <TableSection $span={1}>Name</TableSection>
                  <TableSection $span={7}>
                    {state.info.contact?.name ?? " "}
                  </TableSection>
                </>
              )}

              {state.info.contact.url && (
                <>
                  <TableSection $span={1}>Url</TableSection>
                  <TableSection $span={7}>
                    {state.info.contact?.url}
                  </TableSection>
                </>
              )}
            </>
          ) : (
            "Nil"
          )}
        </Table>
      </div>
      <ButtonContainer>
        <Button
          $disabled={false}
          handleClick={() => {
            navigate("/");
          }}
          $color={"rgba(4,157,210)"}
        >
          Explore more APIs
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default ApiDetails;
