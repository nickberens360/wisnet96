const wait = (amount = 0) => new Promise((resolve) => setTimeout(resolve, amount));

export default async ({store}) => {
    await store.dispatch('getPosts')
    await wait(1000);
    await store.dispatch('getMenuItems');
    await wait(1000);
    await store.dispatch('getOptions')
};
