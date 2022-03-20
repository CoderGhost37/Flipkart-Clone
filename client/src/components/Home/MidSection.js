import styled from "styled-components";
import { imageURL } from "../../constants/data";

const MidSection = () => {
    return (
        <Component>
            {
                imageURL.map(image => (
                    <img src={image} width='33%' />
                ))
            }
        </Component>
    )
}

const Component = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    img {
        @media (max-width: 580px) {
            margin-top: 5px;
            width: 100%;
        }
    }
    @media (max-width: 580px) {
        flex-direction: column;
    }
`;

export default MidSection;