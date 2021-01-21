import { VersionComparer } from './version-comparer';

describe('VersionComparer', () => {
    describe('isNewerVersion', () => {
        it('should report newer version when old version is older than new version', async () => {
            // Arrange

            // Act
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('2.0.3', '2.0.4');

            // Assert
            expect(isNewerVersion).toBeTruthy();
        });

        it('should not report newer version when old version is same as new version', async () => {
            // Arrange

            // Act
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('2.0.3', '2.0.3');

            // Assert
            expect(isNewerVersion).toBeFalsy();
        });

        it('should  not report newer version when old version is newer than new version', async () => {
            // Arrange

            // Act
            const isNewerVersion: boolean = VersionComparer.isNewerVersion('2.0.4', '2.0.3');

            // Assert
            expect(isNewerVersion).toBeFalsy();
        });
    });
});
