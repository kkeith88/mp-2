export type DogBreedTypes = {
    id: string;
    attributes: {
        name: string;
        description: string;
        life: {
            min: number;
            max: number;
        };
    };
}
 