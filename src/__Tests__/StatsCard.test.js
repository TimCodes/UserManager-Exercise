import React from 'react';
import renderer from 'react-test-renderer';
import StatsCard from '../common/StatsCard'

test('renders Stats Card', () => {
  const component = renderer.create(
    <StatsCard title="teest" value="test" />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
