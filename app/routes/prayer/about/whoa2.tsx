import { Link } from "@remix-run/react";

export default function Whoa() {
  return (
    <div>
      <p>
        2 be like Whoa, this is a nested route! We render the <code>/about</code> layout
        route component, and its <code>Outlet</code> renders our route
        component. 🤯
      </p>
      <p>
        <strong>
          <Link to="..">
            2 Go back to the <code>/about</code> index.
          </Link>
        </strong>
      </p>
    </div>
  );
}
