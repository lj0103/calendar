export default {
    setHeaderTitle(state, routerName) {
        switch (routerName) {
            case 'day':
                state.headerTitle = '当天信息';
                break;
            case 'month':
                state.headerTitle = '近期信息';
                break;
            case 'year':
                state.headerTitle = '当年信息';
                break;
            default:
                state.headerTitle = '当天信息';
                break;
        }
    }
}