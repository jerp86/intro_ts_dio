// Como podemos melhorar o esse código usando TS?

interface PersonalProps {
  nome: string;
  idade: number;
  profissao: string;
}

let pessoa1 = {} as PersonalProps;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz";

let pessoa2 = {} as PersonalProps;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3: PersonalProps = {
  nome: "laura",
  idade: 32,
  profissao: "Atriz",
};

let pessoa4: PersonalProps = {
  nome: "carlos",
  idade: 19,
  profissao: "padeiro",
};
