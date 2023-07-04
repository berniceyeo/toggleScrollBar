import { useLocation, useNavigate } from "react-router-dom";
import { Container, Image, Header, ButtonContainer } from "./ApiDetailsStyle";
import { Button } from "../components/Button/Button";
import ErrorBoundary from "../components/Error/ErrorBoundary";
import {
  CONTACT,
  DESCRIPTION,
  EXPLORE_MORE_APIS,
  SWAGGER,
} from "../utils/constants";
import { SubSection } from "../components/SubSection/SubSection";
import { SubSectionTable } from "../components/SubSection/SubSectionTable";

function ApiDetails(props: any) {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const logo = state["info"]["x-logo"]["url"];

  return (
    <ErrorBoundary>
      <Container>
        <Header className="header">
          <div>{logo ? <Image src={`${logo}`} alt="logo" /> : ""}</div>
          <div>{state.info.title}</div>
        </Header>
        <SubSection
          title={DESCRIPTION}
          description={state.info.description ?? "Nil"}
        />
        <SubSection title={SWAGGER} description={state.swaggerUrl ?? "Nil"} />
        <SubSectionTable contact={state.info.contact} title={CONTACT} />
        <ButtonContainer>
          <Button
            $disabled={false}
            handleClick={() => {
              navigate("/");
            }}
            $color={"rgba(4,157,210)"}
          >
            {EXPLORE_MORE_APIS}
          </Button>
        </ButtonContainer>
      </Container>
    </ErrorBoundary>
  );
}

export default ApiDetails;
