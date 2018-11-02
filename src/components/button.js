import {btnPrimaryClass, btnSuccessClass, btnInfoClass, btnWarningClass, btnDangerClass, btnDefaultClass, btnLgClass, btnSmClass, btnXsClass} from '../consts';

export default (editor, config = {}) => {
    const domc = editor.DomComponents;

    const linkType = domc.getType('link');
    const linkModel = linkType.model;
    const linkView = linkType.view;

    let traits = linkModel.prototype.defaults.traits.slice(0);
    traits.push({
        type: 'select',
        label: 'Type',
        name: 'btnStyle',
        changeProp: 1,
        options: [
            {value: btnPrimaryClass, name: 'Primary'},
            {value: btnSuccessClass, name: 'Success'},
            {value: btnInfoClass, name: 'Info'},
            {value: btnWarningClass, name: 'Warning'},
            {value: btnDangerClass, name: 'Danger'},
            {value: btnDefaultClass, name: 'Default'}
        ]
    });
    traits.push({
        type: 'select',
        label: 'Size',
        name: 'btnSize',
        changeProp: 1,
        options: [
            {value: 'btn-normal', name: 'Normal'},
            {value: btnLgClass, name: 'Large'},
            {value: btnSmClass, name: 'Medium'},
            {value: btnXsClass, name: 'Small'}
        ]
    });

    let model = linkModel.extend({
        init: function () {
        },

        // Extend default properties
        defaults: Object.assign({}, linkModel.prototype.defaults, {
            // Can't drop other elements inside it
            droppable: false,

            type: 'button',
            tagName: 'a',

            btnStyle: 'btn-primary',
            btnSize: 'btn-normal',

            // Traits (Settings)
            traits: traits
        })
    }, {
        isComponent: function (el) {
            var result = '';

            if (el.tagName === 'A' && el.className.includes('btn') && el.getAttribute('data-type') === 'btn') {
                result = {type: 'marketing-button'};
            }

            return result;
        }
    });

    let view = linkView.extend({

        init: function () {
            linkView.prototype.init();
            
            let model = this.model;

            this.listenTo(model, 'change:btnStyle', this.updateButton);
            this.listenTo(model, 'change:btnSize', this.updateButton);

            // To update the view
            this.updateButton();
        },

        updateButton: function () {
            const style = this.model.get('btnStyle');
            const size = this.model.get('btnSize');

            const _class = `btn ${style} ${size}`;

            this.model.setClass(_class);

            // update css class on element
            var el = this.el;
            el.setAttribute('class', _class);

            this.el = el;
        }

    });

    domc.addType('marketing-button', {
        // Define the Model
        model: model,

        // Define the View
        view: view
    });
}

