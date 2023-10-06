export default function DiscoverTabs({ selectTab, active, children }: { selectTab: any, active: boolean, children: any }) {
    return (
        <div className={active ? 'selected-tab' : 'tab'} onClick={selectTab}>
            <img src={'../images/' + children.icon + '.png'} alt='milk juice icons' className="beverages" />
            <div>{children.name}</div>
        </div>
    )
}