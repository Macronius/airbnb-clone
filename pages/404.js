// 404.js
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <div classname="not-found">
      <h1 className="bg-blue-400">404 - Page not Found</h1>
      <p>
        Go back to the <Link href="/">Homepage</Link> page
      </p>
    </div>
  );
}

// .title {
//     color: #333;
//     padding-bottom: 20px;
//     text-align: center;
// }
// .text {
//     color: #777;
// }
// .btn {
//     display: block;
//     width: 150px;
//     padding: 8px 0;
//     margin: 20px auto;
//     background: #4979ff;
//     border-radius; 4px;
//     color: white;
//     text-align: center;
// }
// .not-found {
//     text-align: center;
// }
