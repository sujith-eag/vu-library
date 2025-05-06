


export const gitSection = [
{
    title: 'Developer Tools',
    items: [
        { label: 'Git & GitHub', link: '/tools/git-github' },
        { label: 'Chrome', link: '/tools/chrome' },
        { label: 'Obsedian', link: '/tools/obsidian' },
        { label: 'VS-Code ', link: '/tools/vscode' },
        // { label: 'Hugo', link: '/tools/hugo/doks1' },
        // { label: 'Hugo-Doks', link: '/tools/hugo/doks2' },
        // { label: 'VitePress', link: '/tools/vitepress/vite1' },        
    ]
}
];

export const viteSection = [
    {
        title: 'VitePress',
        items: [
            { label: 'Setup', link: '/tools/VitePress/1setup' },
            { label: 'Using Markdown', link: '/tools/VitePress/2markdown' },
            { label: 'Using Vue', link: '/tools/VitePress/3using_vue' },
        ]
    }
    ];
    
export const toolsSection = [ ...gitSection , ...viteSection, ]