import TextComparator from '../../../../../support/objects/orders/actions/actions';

describe('Text Comparison Test', () => {
  it('should compare texts and navigate', () => {
    const textComparator = new TextComparator();
    textComparator.compareTextAndNavigate();
  });
});
