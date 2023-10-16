import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET() {
  const data = users;
  return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
  let payload = await request.json({ name: "kaushal" });
  console.log(payload.name);
  if (!payload.name || !payload.email || !payload.password) {
    return NextResponse.json(
      { result: "require field not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "new user created", success: true },
    { status: 201 }
  );
}

// export default function handler(req, res) {
//   if (req.method === "GET") {
//     res.status(200).json(users);
//   } else if (req.method === "POST") {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const newUser = {
//       Name: name,
//       email: email,
//       password: password,
//     };

//     users.push(newUser);
//     res.status(201).json(newUser);
//   }
// }

// export default function handler(req, res) {
//   try {
//     if (req.method === "GET") {
//       res.status(200).json(users);
//     } else if (req.method === "POST") {
//       const name = req.body.name;
//       const email = req.body.email;
//       const password = req.body.password;
//       if (!name || !email || !password) {
//         return res.status(400).json({ error: "Invalid request data" });
//       }
//       const newUser = {
//         Name: name,
//         email: email,
//         password: password,
//       };
//       users.push(newUser);
//       res.status(201).json({ users });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// }
