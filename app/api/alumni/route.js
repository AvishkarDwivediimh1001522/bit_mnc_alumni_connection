
// import { connectToDatabase } from "@/db/alumniDB";
// import Alumni from "@/models/Alumni";

// // POST: Save new alumni data
// export async function POST(req) {
//     try {
//         await connectToDatabase();
//         const data = await req.json();

//         // Debugging log
//         console.log("Received Alumni Data:", data);

//         // Check if the email already exists
//         const existingAlumni = await Alumni.findOne({ email: data.email });

//         if (existingAlumni) {
//             return new Response(
//                 JSON.stringify({ message: "This email is already registered. Please use a different email." }),
//                 {
//                     status: 400, // Bad Request
//                     headers: { "Content-Type": "application/json" },
//                 }
//             );
//         }

//         // Create a new Alumni document
//         const newAlumni = new Alumni(data);
//         await newAlumni.save();

//         return new Response(JSON.stringify({ message: "Alumni added successfully" }), {
//             status: 201,
//             headers: { "Content-Type": "application/json" },
//         });
//     } catch (error) {
//         console.log("Error adding alumni:", error);
//         return new Response(JSON.stringify({ message: "Error occurred while adding new alumni", error: error.message }), {
//             status: 500,
//             headers: { "Content-Type": "application/json" },
//         });
//     }
// }

// // GET: Retrieve all alumni data
// export async function GET() {
//     try {
//         await connectToDatabase();
//         const alumni = await Alumni.find(); // Corrected Model usage

//         return new Response(JSON.stringify(alumni), {
//             status: 200,
//             headers: { "Content-Type": "application/json" },
//         });
//     } catch (error) {
//         console.error("Error fetching alumni data:", error);
//         return new Response(JSON.stringify({ message: "Error fetching alumni data", error: error.message }), {
//             status: 500,
//             headers: { "Content-Type": "application/json" },
//         });
//     }
// }



import { connectToDatabase } from "@/db/alumniDB";
import Alumni from "@/models/Alumni";

export async function POST(req) {
    try {
        console.log("Connecting to database...");
        await connectToDatabase();

        const data = await req.json();
        console.log("Received Alumni Data:", data);

        if (!data.email) {
            return new Response(JSON.stringify({ message: "Email is required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const existingAlumni = await Alumni.findOne({ email: data.email });

        if (existingAlumni) {
            return new Response(
                JSON.stringify({ message: "This email is already registered. Please use a different email." }),
                {
                    status: 400,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        const newAlumni = new Alumni(data);
        await newAlumni.save();

        return new Response(JSON.stringify({ message: "Alumni added successfully" }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error adding alumni:", error);
        return new Response(JSON.stringify({ message: "Error occurred while adding new alumni", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function GET() {
    try {
        console.log("Fetching all alumni data...");
        await connectToDatabase();
        const alumni = await Alumni.find();

        return new Response(JSON.stringify(alumni), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching alumni data:", error);
        return new Response(JSON.stringify({ message: "Error fetching alumni data", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
