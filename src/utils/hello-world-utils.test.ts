import { getHelloMessage } from './hello-world-utils';

describe('hello-world-utils', () => {
  describe('getHelloMessage', () => {
    test('should return "Hello world!"', () => {
      expect(getHelloMessage('world')).toEqual('Hello world!');
    });

    test.each`
      name       | expectedResult
      ${'Alice'} | ${'Hello Alice!'}
      ${'Bob'}   | ${'Hello Bob!'}
    `(
      'should return "$expectedResult" for "$name"',
      ({ name, expectedResult }) => {
        expect(getHelloMessage(name)).toEqual(expectedResult);
      }
    );
  });
});
