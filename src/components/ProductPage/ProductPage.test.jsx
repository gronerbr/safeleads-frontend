import React from 'react';
import { shallow } from 'enzyme';
import ProductPage from './ProductPage';

describe('ProductPage', () => {
  it('shoud mount', () => {
    const component = shallow(<ProductPage product={{}} />); //eslint-disable-line
  });
  describe('media videos', () => {
    const resultContainer = jest.fn();
    const component = shallow(<ProductPage
      product={{}}
      videos={[
        {
          thumbnail: '',
        },
      ]}
      updateProduct={patch => resultContainer(patch)}
    />);

    it('should add video thumbnail when user input youtube url', () => {
      component.instance().handleVideoChange({
        target: { value: 'https://www.youtube.com/watch?v=m9VA8_lLiWw' },
      }, 0, 'youtube');

      const firstParameterOfFirstCall = resultContainer.mock.calls[0][0];

      expect(firstParameterOfFirstCall.videos[0].thumbnail).toBeDefined();
      expect(firstParameterOfFirstCall.videos[0].thumbnail.length).toBeGreaterThan(1);
    });

    it('should remove video thumbnail when user input a non youtube url', () => {
      component.instance().handleVideoChange({
        target: { value: 'https://www.youtube.com/' },
      }, 0, 'youtube');

      const firstParameterOfSecondCall = resultContainer.mock.calls[1][0];

      expect(firstParameterOfSecondCall.videos[0].thumbnail).toBeDefined();
      expect(firstParameterOfSecondCall.videos[0].thumbnail.length).toBe(0);
    });
  });
});
