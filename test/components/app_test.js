import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use descrive to group together similar tests
describe('App', () => {

    let component;
    beforeEach(() => {
        component = renderComponent(App);
    });

    it('shows the comment box', () => {
       expect(component.find('.comment-box')).to.exist
    });

    it('shows a comment list', () => {
       expect(component.find('.comment-list')).to.exist
    });

});

