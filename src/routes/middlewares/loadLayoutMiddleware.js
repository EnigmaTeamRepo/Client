export async function loadLayoutMiddleware({ to }) {
    const { layout } = to.meta
    const normalizedLayoutName = layout || 'DefaultLayout'
    const component = await import(`@/layouts/${normalizedLayoutName}.vue`)
    to.meta.layoutComponent = component.default
}
