import type { MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => ({
  title: "Ear to Hear: eartohear.app",
});

export default function Boundaries() {
  return (
    <div className="remix__page">
      <main>
        <Outlet />
      </main>

      <aside>
        <h2>Click to View Watches:</h2>
        <ul>
          <li>
            <Link to=".">Which One is Yours?</Link>
          </li>
          <li>
            <Link to="first">
              First Watch: <i>The Evening Watch</i>{" "}<strong>6pm–9pm</strong>
            </Link>
          </li>
          <li>
            <Link to="two">
              Param: <i>two</i>
            </Link>
          </li>
          <li>
            <Link to="three">
              Param: <i>three</i>
            </Link>
          </li>
          <li>
            <Link to="four">
              Param: <i>four</i>
            </Link>
          </li>
          <li>
            <Link to="five">
              Param: <i>five</i>
            </Link>
          </li>
          <li>
            <Link to="six">
              Param: <i>six</i>
            </Link>
          </li>
          <li>
            <Link to="seven">
              Param: <i>seven</i>
            </Link>
          </li>
          <li>
            <Link to="eight">
              Param: <i>eight</i>
            </Link>
          </li>
          <li>
            <Link to="this-record-does-not-exist">This will be a 404</Link>
          </li>
          <li>
            <Link to="shh-its-a-secret">And this will be 401 Unauthorized</Link>
          </li>
          <li>
            <Link to="kaboom">This one will throw an error</Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
