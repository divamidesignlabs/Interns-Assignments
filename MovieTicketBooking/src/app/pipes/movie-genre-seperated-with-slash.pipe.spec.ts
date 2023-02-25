import { MovieGenreSeperatedWithSlashPipe } from './movie-genre-seperated-with-slash.pipe';

describe('MovieGenreSeperatedWithSlashPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieGenreSeperatedWithSlashPipe();
    expect(pipe).toBeTruthy();
  });
});
