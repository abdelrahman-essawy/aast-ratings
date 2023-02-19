
export const revalidate = (path: string) => {

    (async () => {
        const res = await fetch(`/api/revalidate?path=${path}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await res.json();
        console.log(json);
    })();
}
