import { CourseDuration } from '../../../../../src/Contexts/Mooc/Courses/domain/CourseDuration';

export class CourseDurationMother {
    static create(value: number): CourseDuration {
        return new CourseDuration(value);
    }

    static random(): CourseDuration {
        const min = Math.ceil(1);
        const max = Math.floor(600);
        return this.create(Math.floor(Math.random() * (max - min) + min));
    }
}