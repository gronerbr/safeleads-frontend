import { connect } from 'react-redux';
import Counter from '../../components/Counter/Counter';
import { increment, decrement, decrementAsync } from '../../redux/modules/counter';

const mapStateToProps = state => ({
  total: state.counter.total,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
  decrementAsync: () => {
    dispatch(decrementAsync());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
