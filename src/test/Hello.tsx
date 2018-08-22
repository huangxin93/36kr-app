import * as React from 'react';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';
import * as actions from './actions';
import { IStoreState } from './type';

interface IProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
  }

  function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: IProps) {
    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }
  
    return ( 
      <div className="hello">
        <div className="greeting">
          Hello {name + enthusiasmLevel}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }

  export function mapStateToProps({ enthusiasmLevel, languageName }: IStoreState) {
    return {
      enthusiasmLevel,
      name: languageName,
    }
  }

  export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onIncrement: () => dispatch(actions.incrementEnthusiasm())
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Hello);