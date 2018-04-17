import iFrame from './components/iframe';
import Button from './components/button';

export default (editor, config = {}) => {
    iFrame(editor, config);

    Button(editor, config);
}
