export default function DiscoverTabs({ selectTab, active, children }: { selectTab: any, active: boolean, children: any }) {
    return (
        <div className={active ? 'selected-tab' : 'tab'} onClick={selectTab}>
            <span className="material-symbols-outlined beverages">
                local_cafe
            </span>
            <div>{children}</div>
        </div>
    )
}