import type { DogBreedTypes } from "../types/DogBreedTypes";
import styled from "styled-components";

const DogGrid = styled.div`
    display: grid;
    gap: 20px;
    padding: 20px;
`;

const DogGridItem = styled.div`
    border: 1px solid #ccc;
    padding: 15px;
    font-size: 20px;
`;


export default function DogBreeds({ breeds }: { readonly breeds: DogBreedTypes[] }) {
    return (
    <DogGrid>
        {breeds.slice(0,30).map((breed) => (
        <DogGridItem key={breed.id}>
            <h3>{breed.attributes.name}</h3>
            <p>{breed.attributes.description}</p>
            <p><strong>Life Span:</strong> {breed.attributes.life.min} - {breed.attributes.life.max} years</p>
        </DogGridItem>
        ))}
    </DogGrid>
    );
}