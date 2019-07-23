import foo from '../components/foo'
import bar from '../components/bar'
export default new Router({
    mode:"history",
    base:Process.env.BASE_URL,
    routes:[
        {
            path:'/home/:username',
            name:"home",
            componet:foo
        },
        {
            path:'/welcome',
            name:"welcome",
            componet:bar
        }
    ]

})