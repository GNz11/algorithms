import './index';

test('bind', () => {
  const helper = function(a, b) {
    return this.name + a + b;
  };
  const fn = helper.bind({ name: 'test' }, 'arg1');
  expect(fn('arg2')).toEqual('testarg1arg2');
});
