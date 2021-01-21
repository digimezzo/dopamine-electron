import { StringCompare } from './string-compare';

describe('StringCompare', () => {
    describe('equalsIgnoreCase', () => {
        it('should return true if both strings are undefined', () => {
            // Arrange
            const string1: string = undefined;
            const string2: string = undefined;

            // Act
            const sringsAreEqual: boolean = StringCompare.equalsIgnoreCase(string1, string2);

            // Assert
            expect(sringsAreEqual).toBeTruthy();
        });

        it('should return false if string1 is undefined and string2 is not undefined', () => {
            // Arrange
            const string1: string = undefined;
            const string2: string = 'string 2';

            // Act
            const sringsAreEqual: boolean = StringCompare.equalsIgnoreCase(string1, string2);

            // Assert
            expect(sringsAreEqual).toBeFalsy();
        });

        it('should return false if string1 is not undefined and string2 is undefined', () => {
            // Arrange
            const string1: string = 'string 1';
            const string2: string = undefined;

            // Act
            const sringsAreEqual: boolean = StringCompare.equalsIgnoreCase(string1, string2);

            // Assert
            expect(sringsAreEqual).toBeFalsy();
        });

        it('should return true if string1 and string2 are the same and their casing matches', () => {
            // Arrange
            const string1: string = 'thisisastring';
            const string2: string = 'thisisastring';

            // Act
            const sringsAreEqual: boolean = StringCompare.equalsIgnoreCase(string1, string2);

            // Assert
            expect(sringsAreEqual).toBeTruthy();
        });

        it('should return true if string1 and string2 are the same but their casing does not match', () => {
            // Arrange
            const string1: string = 'thisisastring';
            const string2: string = 'THISISASTRING';

            // Act
            const sringsAreEqual: boolean = StringCompare.equalsIgnoreCase(string1, string2);

            // Assert
            expect(sringsAreEqual).toBeTruthy();
        });
    });

    describe('isNullOrWhiteSpace', () => {
        it('should return true if the string to check is undefined', () => {
            // Arrange
            const stringToCheck: string = undefined;

            // Act
            const stringToCheckIsNullOrWhiteSpace: boolean = StringCompare.isNullOrWhiteSpace(stringToCheck);

            // Assert
            expect(stringToCheckIsNullOrWhiteSpace).toBeTruthy();
        });

        it('should return true if the string to check is empty', () => {
            // Arrange
            const stringToCheck: string = '';

            // Act
            const stringToCheckIsNullOrWhiteSpace: boolean = StringCompare.isNullOrWhiteSpace(stringToCheck);

            // Assert
            expect(stringToCheckIsNullOrWhiteSpace).toBeTruthy();
        });

        it('should return true if the string to check is a white space', () => {
            // Arrange
            const stringToCheck: string = ' ';

            // Act
            const stringToCheckIsNullOrWhiteSpace: boolean = StringCompare.isNullOrWhiteSpace(stringToCheck);

            // Assert
            expect(stringToCheckIsNullOrWhiteSpace).toBeTruthy();
        });

        it('should return true if the string to check is multiple white spaces', () => {
            // Arrange
            const stringToCheck: string = '     ';

            // Act
            const stringToCheckIsNullOrWhiteSpace: boolean = StringCompare.isNullOrWhiteSpace(stringToCheck);

            // Assert
            expect(stringToCheckIsNullOrWhiteSpace).toBeTruthy();
        });

        it('should return false if the string to check contains characters', () => {
            // Arrange
            const stringToCheck: string = 'myString 1';

            // Act
            const stringToCheckIsNullOrWhiteSpace: boolean = StringCompare.isNullOrWhiteSpace(stringToCheck);

            // Assert
            expect(stringToCheckIsNullOrWhiteSpace).toBeFalsy();
        });
    });
});
