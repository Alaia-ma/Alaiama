const menuList = [
  '关于我',
  '我的爱好',
  '视觉传达设计',
  'UI界面设计',
  '产品设计',
  '已落地项目'
]
const Menu = () => {
  return (
    <section>
      <h1>Profile简介</h1>
      <ul>
        {menuList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

export default Menu