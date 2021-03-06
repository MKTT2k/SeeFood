(function ($) {
    'use strict'; $(document).ready(function () {
        var treeData = [{ title: "item1 with key and tooltip", tooltip: "Look, a tool tip!" }, { title: "item2: selected on init", select: true }, { title: "Folder", isFolder: true, key: "id3", children: [{ title: "Sub-item 3.1", children: [{ title: "Sub-item 3.1.1", key: "id3.1.1" }, { title: "Sub-item 3.1.2", key: "id3.1.2" }] }, { title: "Sub-item 3.2", children: [{ title: "Sub-item 3.2.1", key: "id3.2.1" }, { title: "Sub-item 3.2.2", key: "id3.2.2" }] }] }, { title: "Document with some children (expanded on init)", key: "id4", expand: true, children: [{ title: "Sub-item 4.1 (active on init)", activate: true, children: [{ title: "Sub-item 4.1.1", key: "id4.1.1" }, { title: "Sub-item 4.1.2", key: "id4.1.2" }] }, { title: "Sub-item 4.2 (selected on init)", select: true, children: [{ title: "Sub-item 4.2.1", key: "id4.2.1" }, { title: "Sub-item 4.2.2", key: "id4.2.2" }] }, { title: "Sub-item 4.3 (hideCheckbox)", hideCheckbox: true }, { title: "Sub-item 4.4 (unselectable)", unselectable: true }] }]; $("#default-tree").dynatree({ fx: { height: "toggle", duration: 200 } }); $("#drag-tree").dynatree({
            fx: { height: "toggle", duration: 200 }, dnd: {
                preventVoidMoves: true, onDragStart: function (node) { return true; }, onDragEnter: function (node, sourceNode) {
                    if (node.parent !== sourceNode.parent) { return false; }
                    return ["before", "after"];
                }, onDrop: function (node, sourceNode, hitMode, ui, draggable) { sourceNode.move(node, hitMode); }
            }
        });

        $("#check-tree").dynatree({
            checkbox: true, selectMode: 2, children: treeData, onSelect: function (select, node) { var selNodes = node.tree.getSelectedNodes(); var selKeys = $.map(selNodes, function (node) { return "[" + node.data.key + "]: '" + node.data.title + "'"; }); $("#echoSelection2").text(selKeys.join(", ")); }, onClick: function (node, event) {
                if (node.getEventTargetType(event) == "title")
                    node.toggleSelect();
            }, onKeydown: function (node, event) { if (event.which == 32) { node.toggleSelect(); return false; } }, cookieId: "dynatree-Cb2", idPrefix: "dynatree-Cb2-"
        });
    });
})(window.jQuery);