import { Link } from 'react-router';

export default function Menu() {
  return (
    <>
      <li>
        <Link to="/service">Services</Link>
      </li>

      <li>
        <a>Coverage</a>
      </li>

      <li>
        <a>About Us</a>
      </li>

      <li>
        <a>Pricing</a>
      </li>

      <li>
        <a>Be a Rider</a>
      </li>
    </>
  );
}
