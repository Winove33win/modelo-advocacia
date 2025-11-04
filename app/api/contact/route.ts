import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || !body.email) {
      return NextResponse.json({ message: "Dados inválidos" }, { status: 400 });
    }

    await new Promise((resolve) => setTimeout(resolve, 600));

    return NextResponse.json({ message: "Mensagem recebida" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Erro interno" }, { status: 500 });
  }
}
