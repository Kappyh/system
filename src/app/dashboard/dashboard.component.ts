import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public perfilDoUsuario: FormGroup;
  public sexos: Array<any>;

  constructor() {}

  ngOnInit() {
    this.sexos = [{ valor: "feminino" }, { valor: "masculino" }];
    this.perfilDoUsuario = new FormGroup({
      nomeCompleto: new FormControl("", [
        Validators.minLength(10),
        Validators.required
      ]),
      sexo: new FormControl("", Validators.required),
      dataNascimento: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      endereco: new FormGroup({
        rua: new FormControl("", [
          Validators.minLength(10),
          Validators.required
        ]),
        cep: new FormControl("", [
          Validators.pattern(/[0-9]{5}-[\d]{3}/g),
          Validators.required
        ]),
        cidade: new FormControl("", [Validators.required])
      })
    });
  }

  public cadastrar(): void {
    console.log(this.perfilDoUsuario.value);
  }
}
