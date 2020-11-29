(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/de2":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function UserProfileComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.oldValues);
} }
function UserProfileComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.oldValues);
} }
function UserProfileComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_table_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Song name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Autor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "tbody", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UserProfileComponent {
    constructor() { }
    ngOnInit() {
        this.oldValues = document.getElementById('temporal').innerHTML;
        this.imgRute = "../../assets/img/";
        this.imgRuteActually = this.imgRute;
        this.imageDefault = "account_circle-24px.svg";
        this.imageActually = this.imageDefault;
        this.settingsAppear = false;
        this.showTableHeader = false;
    }
    inSettings() {
        this.settingsAppear = true;
        console.log("In settings");
    }
    saveChanges() {
        //Change Biography
        this.newValues = document.getElementById('biography-input').value;
        this.oldValues = this.newValues;
        //Change Image
        const input = document.getElementById('customFile');
        if (input.files && input.files[0]) {
            console.log("File selected : ", input.files[0]);
            this.imageActually = input.files[0].name;
            //this.imgRuteActually = (document.getElementById("customFile") as HTMLInputElement).value;
        }
        else
            console.log("No file selected " + input.files[0]);
        this.settingsAppear = false;
        console.log("Settings disappear");
    }
    loadTable() {
        this.showTableHeader = true;
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', '../../assets/json/mySongTable.json', true);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let datos = JSON.parse(this.responseText);
                let res = document.querySelector('#tableBody');
                res.innerHTML = '';
                for (let item of datos) {
                    res.innerHTML += `
          <tr>
            <th scope="row">${item.id}</th>
            <td>${item.soungName}</td>
            <td>${item.autor}</td>
            <td>${item.time}</td>
            <td><div id="musicPlayer-icon"><button type="button" class="btn btn-outline-light btn-sm" (click)="playMusic()">Play</button></div></td>
          </tr>
          `;
                }
            }
        };
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 28, vars: 7, consts: [["id", "naturalContainer"], ["id", "container"], ["id", "profile-header"], ["id", "image-profile"], ["id", "user-icon", 3, "src"], ["class", "custom-file", 4, "ngIf"], ["id", "info-profile"], ["id", "settings-icon", 3, "click"], ["src", "../../assets/img/settings-24px.svg", "onclick", ""], ["id", "userName"], ["id", "completeName"], ["id", "temporal", 2, "display", "none"], [4, "ngIf"], ["type", "button", "class", "btn btn-dark btn-sm", "id", "saveChanges", 3, "click", 4, "ngIf"], ["id", "profile-main"], ["id", "mySongs-header"], ["id", "profile-main-mySongs", 3, "click"], ["id", "profile-main-myList"], ["id", "mySongs-main"], ["class", "table table-striped table-dark", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input"], ["for", "customFile", 1, "custom-file-label"], ["id", "biography-input", "type", "text", "placeholder", "Write your biography", "maxlength", "110", 3, "value"], ["id", "biography"], ["type", "button", "id", "saveChanges", 1, "btn", "btn-dark", "btn-sm", 3, "click"], [1, "table", "table-striped", "table-dark"], ["id", "tableHeader"], ["scope", "col"], ["id", "tableBody"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserProfileComponent_div_5_Template, 4, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_div_click_7_listener() { return ctx.inSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Firesao ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Asdr\u00FAbal S\u00E1nchez Carnicero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Me encanta decir HOLA en alto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserProfileComponent_div_15_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserProfileComponent_div_16_Template, 3, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserProfileComponent_button_17_Template, 2, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_Template_div_click_20_listener() { return ctx.loadTable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mis Canciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mi Lista");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserProfileComponent_table_27_Template, 14, 0, "table", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.imgRuteActually, "", ctx.imageActually, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsAppear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsAppear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.settingsAppear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.settingsAppear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTableHeader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["#naturalContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 90px);\n}\n\n#container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 60%;\n  height: 100%;\n}\n\n#profile-header[_ngcontent-%COMP%] {\n  background: linear-gradient(115deg, #EC2E26 -20%, transparent 110%);\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n#image-profile[_ngcontent-%COMP%] {\n  float: left;\n  width: 20%;\n  height: 100%;\n}\n\n#user-icon[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-top: 8%;\n  width: 80%;\n  height: 78%;\n}\n\n#info-profile[_ngcontent-%COMP%] {\n  float: left;\n  width: 80%;\n  height: 100%;\n}\n\n#settings-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  float: right;\n  padding: 5px;\n}\n\n.custom-file[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-bottom: 3px !important;\n}\n\n#userName[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: x-large;\n  font-family: Arial;\n}\n\n#completeName[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: medium;\n  font-family: Arial;\n}\n\n#biography-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 70% !important;\n  font-size: 0.8rem !important;\n  margin-left: 18px;\n  margin-top: 20px;\n}\n\n#biography[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: small;\n  font-family: Arial;\n}\n\n#saveChanges[_ngcontent-%COMP%] {\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  margin-bottom: 3px;\n  margin-right: 5px;\n  height: calc(1.5em + .75rem + 2px);\n}\n\n#profile-main[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  width: 100%;\n  height: 70%;\n}\n\n#mySongs-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8%;\n  border-bottom: #A09F9F solid 0.2px;\n  background-color: #3e444a;\n  color: #FFFFFF;\n}\n\n#profile-main-mySongs[_ngcontent-%COMP%] {\n  float: left;\n  padding: 10px 10px 10px 10px;\n  margin-left: 30px;\n  margin-top: 4px;\n}\n\n#profile-main-mySongs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: medium;\n  font-family: Arial;\n}\n\n#profile-main-myList[_ngcontent-%COMP%] {\n  float: left;\n  padding: 10px 10px 10px 10px;\n  margin-left: 20px;\n  margin-top: 4px;\n}\n\n#profile-main-myList[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: medium;\n  font-family: Arial;\n}\n\n#mySongs-main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 92%;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin: 0 0 114px 0;\n  border: solid 1px #495057;\n}\n\n#biography-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n#transparent[_ngcontent-%COMP%] {\n  height: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtRUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSw2QkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdHVyYWxDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCk7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3Byb2ZpbGUtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsICNFQzJFMjYgLTIwJSwgdHJhbnNwYXJlbnQgMTEwJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4jaW1hZ2UtcHJvZmlsZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiN1c2VyLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNzglO1xyXG59XHJcblxyXG4jaW5mby1wcm9maWxlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3NldHRpbmdzLWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiN1c2VyTmFtZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbiNjb21wbGV0ZU5hbWUge1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuI2Jpb2dyYXBoeS1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNiaW9ncmFwaHkge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuI3NhdmVDaGFuZ2VzIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xyXG59XHJcblxyXG4jcHJvZmlsZS1tYWluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG59XHJcblxyXG4jbXlTb25ncy1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI0EwOUY5RiBzb2xpZCAwLjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTQ0NGE7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuI3Byb2ZpbGUtbWFpbi1teVNvbmdzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4jcHJvZmlsZS1tYWluLW15U29uZ3Mgc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuI3Byb2ZpbGUtbWFpbi1teUxpc3Qge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbiNwcm9maWxlLW1haW4tbXlMaXN0IHNwYW57XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbiNteVNvbmdzLW1haW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDkyJTtcclxufVxyXG5cclxuLnRhYmxle1xyXG4gICAgbWFyZ2luOiAwIDAgMTE0cHggMDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICM0OTUwNTc7XHJcbn1cclxuXHJcbiNiaW9ncmFwaHktaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiN0cmFuc3BhcmVudHtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Juanma\Desktop\RymLive\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./music-player/music-player.component */ "aF0u");





class AppComponent {
    constructor() {
        this.title = 'RymLive';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-music-player");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_3__["MusicPlayerComponent"]], styles: ["app-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  width: 100%;\n}\n\napp-main[_ngcontent-%COMP%] {\n  position: relative;\n}\n\napp-music-player[_ngcontent-%COMP%] {\n  color: #FFF;\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 1;\n  text-align: center;\n}\n\napp-user-profile[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  background-color: #a09f9f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFFQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0kseUJBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmFwcC1tYWlue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbmFwcC1tdXNpYy1wbGF5ZXJ7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5hcHAtdXNlci1wcm9maWxlIGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxNTksIDE1OSk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./music-player/music-player.component */ "aF0u");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");
/* harmony import */ var ngx_plyr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-plyr */ "pr9R");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "u+pc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
            ngx_plyr__WEBPACK_IMPORTED_MODULE_10__["PlyrModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_8__["MusicPlayerComponent"],
        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        ngx_plyr__WEBPACK_IMPORTED_MODULE_10__["PlyrModule"],
        _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_8__["MusicPlayerComponent"],
                    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                    ngx_plyr__WEBPACK_IMPORTED_MODULE_10__["PlyrModule"],
                    _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
                ],
                providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"] }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aF0u":
/*!********************************************************!*\
  !*** ./src/app/music-player/music-player.component.ts ***!
  \********************************************************/
/*! exports provided: MusicPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPlayerComponent", function() { return MusicPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ngx_plyr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-plyr */ "pr9R");




class MusicPlayerComponent {
    constructor() {
        this.audioSources = [
            {
                src: '../../assets/music/1 - J Balvin - Brillo.mp3',
                type: 'audio/mp3',
            },
        ];
    }
    ngOnInit() {
    }
    played(event) {
        console.log('played', event);
    }
    play() {
        this.player.play(); // or this.plyr.player.play()
    }
    pause() {
        this.player.pause(); // or this.plyr.player.play()
    }
    stop() {
        this.player.stop(); // or this.plyr.player.stop()
    }
}
MusicPlayerComponent.ɵfac = function MusicPlayerComponent_Factory(t) { return new (t || MusicPlayerComponent)(); };
MusicPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MusicPlayerComponent, selectors: [["app-music-player"]], decls: 1, vars: 3, consts: [["mat-card-image", "", "plyr", "", "loadSprite", "", "plyrTitle", "Audio", "plyrType", "audio", 1, "music-player", 3, "plyrPlaysInline", "plyrCrossOrigin", "plyrSources"]], template: function MusicPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("plyrPlaysInline", true)("plyrCrossOrigin", true)("plyrSources", ctx.audioSources);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], ngx_plyr__WEBPACK_IMPORTED_MODULE_2__["PlyrComponent"]], styles: [".music-player[_ngcontent-%COMP%]     .plyr__controls {\n  background-color: #282828;\n}\n\n.music-player[_ngcontent-%COMP%]     .plyr__controls {\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMtcGxheWVyL211c2ljLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tdXNpYy1wbGF5ZXIvbXVzaWMtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLnBseXJfX2NvbnRyb2xze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxufVxyXG4ubXVzaWMtcGxheWVyIDo6bmctZGVlcCAucGx5cl9fY29udHJvbHN7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-music-player',
                templateUrl: './music-player.component.html',
                styleUrls: ['./music-player.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aJk8":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main/main.component */ "wlho");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-profile/user-profile.component */ "/de2");


const routes = [
    { path: 'home', component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"] },
    { path: 'profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "q4sD");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HeaderComponent_h3_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_h3_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sing In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_input_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_input_20_Template_input__ngModel__0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_input_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_input_26_Template_input__ngModel__0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.email; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_28_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_28_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toggleRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.toggleRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.name = "";
        this.username = "";
        this.password = "";
        this.email = "";
    }
    ngOnInit() {
        this.popUp();
        this.register = false;
        this.loginForm = this.formBuilder.group({
            Name: [],
            Username: [],
            Password: [],
            Email: []
        });
    }
    submit() {
        this.localLogin();
    }
    localLogin() {
        var localUser = "admin";
        var localPassword = "admin";
        if (this.loginForm.value.Name == localUser && this.loginForm.value.Password == localPassword) {
            console.log("AAAAAAA");
        }
    }
    toggleRegister() {
        if (this.register === true) {
            this.register = false;
            document.getElementById("submitButton").style.marginLeft = "-50px";
        }
        else if (this.register === false) {
            this.register = true;
            document.getElementById("submitButton").style.marginLeft = "-100px";
        }
    }
    popUp() {
        var btnOpenPopup = document.getElementById('btn-open-popup'), overlay = document.getElementById('overlay'), popup = document.getElementById('popup'), btnClosePopup = document.getElementById('btn-close-popup');
        btnOpenPopup.addEventListener('click', function () {
            overlay.classList.add('active');
            popup.classList.add('active');
        });
        btnClosePopup.addEventListener('click', function (e) {
            e.preventDefault();
            overlay.classList.remove('active');
            popup.classList.remove('active');
        });
        this.register = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 32, vars: 7, consts: [[1, "header"], ["routerLink", "/home", 1, "logo"], ["src", "../../assets/img/rymLive logo.png", "alt", "rymLiveLogo"], [1, "header-left"], ["href", "#contact"], ["href", "#about"], [1, "header-right", 3, "click"], ["id", "btn-open-popup"], ["id", "overlay", 1, "overlay"], ["id", "popup", 1, "popup", 3, "formGroup"], ["id", "btn-close-popup", 1, "btn-close-popup"], ["src", "../../assets/img/close-24px.svg", "alt", ""], [4, "ngIf"], ["id", "popUpFormId", "role", "form"], [1, "container-inputs"], ["formControlName", "Name", "type", "text", "id", "name", "name", "name", "value", "", "placeholder", "Name", 3, "[ngModel]", 4, "ngIf"], ["formControlName", "Username", "type", "text", "id", "user", "name", "user", "value", "", "placeholder", "Username", 3, "[ngModel]"], ["formControlName", "Password", "type", "password", "id", "password", "name", "password", "value", "", "placeholder", "Password", 3, "[ngModel]"], ["formControlName", "Email", "type", "text", "id", "email", "name", "email", "value", "", "placeholder", "Email", 3, "[ngModel]", 4, "ngIf"], ["id", "register", 3, "click", 4, "ngIf"], ["id", "submitButton", "type", "submit", "routerLink", "/profile", 1, "btn", "btn-dark", 3, "click"], ["formControlName", "Name", "type", "text", "id", "name", "name", "name", "value", "", "placeholder", "Name", 3, "[ngModel]"], ["formControlName", "Email", "type", "text", "id", "email", "name", "email", "value", "", "placeholder", "Email", 3, "[ngModel]"], ["id", "register", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_8_listener() { return ctx.popUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_h3_15_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_h3_16_Template, 2, 0, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_input_20_Template, 1, 0, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_Template_input__ngModel__22_listener() { return ctx.username; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_Template_input__ngModel__24_listener() { return ctx.password; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderComponent_input_26_Template, 1, 0, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, HeaderComponent_a_28_Template, 2, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HeaderComponent_a_29_Template, 2, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_30_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #616161;\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  color: #fff;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.header-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #282828;\n  color: #fff;\n  cursor: pointer;\n}\n\n.header-left[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20px;\n  float: left;\n  margin-left: 32px;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20px;\n  float: right;\n  margin-right: 32px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  visibility: hidden;\n  z-index: 1;\n}\n\n.overlay.active[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.popup[_ngcontent-%COMP%] {\n  background: #F8F8F8;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 20px;\n  text-align: center;\n  width: 600px;\n  transition: 0.3s ease all;\n  transform: scale(0.7);\n  opacity: 0;\n}\n\n.popup[_ngcontent-%COMP%]   .btn-close-popup[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 16px;\n  display: block;\n  cursor: pointer;\n  text-align: right;\n  transition: 0.3s ease all;\n  color: #BBBBBB;\n}\n\n.popup[_ngcontent-%COMP%]   .btn-close-popup[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n\n.popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  opacity: 0;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  height: 52px;\n  font-size: 18px;\n  line-height: 52px;\n  border: 1px solid #BBBBBB;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 40px;\n  line-height: 40px;\n  border: none;\n  color: #fff;\n  background: #07090f;\n  border-radius: 3px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.3s ease all;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover {\n  background: rgba(50, 51, 53, 0.9);\n}\n\n\n\n\n\n\n\n.popup.active[_ngcontent-%COMP%] {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.popup.active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  animation: entradaTitulo 0.8s ease 0.5s forwards;\n}\n\n.popup.active[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  animation: entradaSubtitulo 0.8s ease 0.5s forwards;\n}\n\n.popup.active[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%] {\n  animation: entradaInputs 1s linear 1s forwards;\n}\n\n@keyframes entradaTitulo {\n  from {\n    opacity: 0;\n    transform: translateY(-25px);\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes entradaSubtitulo {\n  from {\n    opacity: 0;\n    transform: translateY(25px);\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes entradaInputs {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n#submitButton[_ngcontent-%COMP%] {\n  margin-left: -50px;\n}\n\n#register[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxpQ0FBQTtBQUZKOztBQUtBLDhCQUFBOztBQUNBLGdCQUFBOztBQUNBLDhCQUFBOztBQUNBO0VBQWdCLG1CQUFBO0VBQXFCLFVBQUE7QUFBckM7O0FBQ0E7RUFBbUIsZ0RBQUE7QUFHbkI7O0FBRkE7RUFBbUIsbURBQUE7QUFNbkI7O0FBTEE7RUFBa0MsOENBQUE7QUFTbEM7O0FBUEE7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQVVOO0VBUEU7SUFDSSx3QkFBQTtJQUNBLFVBQUE7RUFTTjtBQUNGOztBQU5BO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUFRTjtFQUxFO0lBQ0ksd0JBQUE7SUFDQSxVQUFBO0VBT047QUFDRjs7QUFKQTtFQUNJO0lBQU8sVUFBQTtFQU9UO0VBTkU7SUFBSyxVQUFBO0VBU1A7QUFDRjs7QUFQQTtFQUNJLGtCQUFBO0FBU0o7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFTSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTYxNjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlciBhLCAuaGVhZGVyIHNwYW57XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMThweDsgXHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi5sb2dvIGltZ3tcclxuICAgIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uaGVhZGVyLWxlZnQgYTpob3ZlciwgLmhlYWRlci1yaWdodCBhOmhvdmVyLCAuaGVhZGVyLXJpZ2h0IHNwYW46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXItbGVmdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuLmhlYWRlci1yaWdodCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcblxyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ub3ZlcmxheS5hY3RpdmUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnBvcHVwIHtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5wb3B1cCAuYnRuLWNsb3NlLXBvcHVwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcclxuICAgIGNvbG9yOiAjQkJCQkJCO1xyXG59XHJcblxyXG4ucG9wdXAgLmJ0bi1jbG9zZS1wb3B1cDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnBvcHVwIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnBvcHVwIGRpdiAuY29udGFpbmVyLWlucHV0cyB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucG9wdXAgZGl2IC5jb250YWluZXItaW5wdXRzIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JCQkJCQjtcclxufVxyXG5cclxuLnBvcHVwIGRpdiAuY29udGFpbmVyLWlucHV0cyBpbnB1dFt0eXBlPXRleHRdLCAgaW5wdXRbdHlwZT1wYXNzd29yZF17XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5wb3B1cCBkaXYgLmJ0bi1zdWJtaXQge1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICMwNzA5MGY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzIGVhc2UgYWxsO1xyXG59XHJcblxyXG4ucG9wdXAgZGl2IC5idG4tc3VibWl0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUxLCA1MywgMC45KTtcclxufVxyXG5cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4vKiBBTklNQUNJT05FUyAqL1xyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi5wb3B1cC5hY3RpdmUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XHJcbi5wb3B1cC5hY3RpdmUgaDMgeyBhbmltYXRpb246IGVudHJhZGFUaXR1bG8gLjhzIGVhc2UgLjVzIGZvcndhcmRzOyB9XHJcbi5wb3B1cC5hY3RpdmUgaDQgeyBhbmltYXRpb246IGVudHJhZGFTdWJ0aXR1bG8gLjhzIGVhc2UgLjVzIGZvcndhcmRzOyB9XHJcbi5wb3B1cC5hY3RpdmUgLmNvbnRhaW5lci1pbnB1dHMgeyBhbmltYXRpb246IGVudHJhZGFJbnB1dHMgMXMgbGluZWFyIDFzIGZvcndhcmRzOyB9XHJcblxyXG5Aa2V5ZnJhbWVzIGVudHJhZGFUaXR1bG8ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBlbnRyYWRhU3VidGl0dWxvIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBlbnRyYWRhSW5wdXRzIHtcclxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuI3N1Ym1pdEJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcclxufVxyXG5cclxuI3JlZ2lzdGVye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "u+pc":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "aJk8");






class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"], { useHash: true })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"], { useHash: true })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 3, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "main works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\n  background-color: azure;\n  right: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2000px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFFQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG4gICBcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDAwcHg7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map