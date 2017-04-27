/**
 * floater 넓이 조정을 위한 OVERRIDE
 */
Ext.define('Study.overrides.Item', {
    override: 'Ext.list.TreeItem',
    privates: {
        createFloater: function () {
            var me = this,
                owner = me.getOwner(),
                ownerTree = me.up('treelist'),
                floater,
                toolElement = me.getToolElement();
            
            me.floater = floater = new Ext.container.Container({
                cls: ownerTree.self.prototype.element.cls + ' ' + ownerTree.uiPrefix + ownerTree.getUi() + ' ' + Ext.baseCSSPrefix + 'treelist-floater',
                floating: true,
                width: Ext.isIE8 ? 200 : 230,
                shadow: false,
                renderTo: Ext.getBody(),
                listeners: {
                    element: 'el',
                    click: function (e) {
                        return owner.onClick(e);
                    }
                }
            });

            floater.add(me);
            floater.show();
            floater.el.alignTo(toolElement, 'tr?');

            return floater;
        }
    }
});
