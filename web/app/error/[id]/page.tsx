export default async function ErrorDetails({ params }: { params: { id: string; } }) {
    const { id } = await params;
    return (
        <div className="text-center mt-10 text-5xl">
            {id}
        </div>
    );
}