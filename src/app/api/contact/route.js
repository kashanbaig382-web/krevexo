export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return Response.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return Response.json(
        {
          success: false,
          message: "Message is too short.",
        },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is missing.");

      return Response.json(
        {
          success: false,
          message: "Contact form is not configured.",
        },
        { status: 500 }
      );
    }

    const web3Response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },

        body: JSON.stringify({
          access_key: accessKey,
          name: name,
          email: email,
          subject: `KREVEXO Contact: ${subject}`,
          message: message,
          from_name: "KREVEXO Contact Form",
        }),
      }
    );

    const responseText = await web3Response.text();

    console.log("Web3Forms status:", web3Response.status);
    console.log("Web3Forms response:", responseText);

    let result;

    try {
      result = JSON.parse(responseText);
    } catch {
      console.error("Web3Forms returned a non-JSON response.");

      return Response.json(
        {
          success: false,
          message: "Contact service returned an invalid response.",
        },
        { status: 502 }
      );
    }

    if (!web3Response.ok || !result.success) {
      return Response.json(
        {
          success: false,
          message:
            result.message || "Message could not be sent.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}