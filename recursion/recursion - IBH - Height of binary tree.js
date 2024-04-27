function height(root) {

    // base
    if (root === null) {
        return 0;
    }

    // hypthesis
    let leftHeight = height(root.left);
    let rightHeight = height(root.right);

    // induction 
    return 1 + Math.max(leftHeight, rightHeight); //get max height of both sub tress
}