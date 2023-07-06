export default function Boundaries() {

    return (
        <>
        <h1>The <i style={{ color: "red" }}>3rd</i> watch:</h1>
        <h2>The Breaking of Day <br />
        <i style={{ color: "red" }}>12AM - 3AM</i></h2>
        <p>
            This is a period of much spiritual activity. This watch hour will strengthen 
            your faith. It is the same time that Peter denied Christ three times. 
            (Matthew 26: 34, 74; Mark 144:30; Luke 22:34; John 13:38).
        </p>
        <h2>Errors</h2>
        <p>
            When a route throws an error in it's action, loader, or component, Remix
            automatically catches it, won't even try to render the component, but it
            will render the route's ErrorBoundary instead. If the route doesn't have
            one, it will bubble up to the routes above it until it hits the root.
        </p>
        <p>So be as granular as you want with your error handling.</p>
        <h2>Not Found</h2>
        <p>
            (and other{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses">
            client errors
            </a>
            )
        </p>
        <p>
            Loaders and Actions can throw a <code>Response</code> instead of an
            error and Remix will render the CatchBoundary instead of the component.
            This is great when loading data from a database isn't found. As soon as
            you know you can't render the component normally, throw a 404 response
            and send your app into the catch boundary. Just like error boundaries,
            catch boundaries bubble, too.
        </p>
        </>
    );
}
