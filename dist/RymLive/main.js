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
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function UserProfileComponent_section_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Choose file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_section_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r2.oldValues);
} }
function UserProfileComponent_section_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.oldValues);
} }
function UserProfileComponent_section_1_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.saveChanges(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_section_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Song name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Autor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Play");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "tbody", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_section_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserProfileComponent_section_1_div_5_Template, 4, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.inSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserProfileComponent_section_1_div_15_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UserProfileComponent_section_1_div_16_Template, 3, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserProfileComponent_section_1_button_17_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_Template_div_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.loadTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Mis Canciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_Template_div_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.uploadSong(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Subir canci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, UserProfileComponent_section_1_div_26_Template, 15, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserProfileComponent_section_1_div_27_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.user.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingsAppear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.user.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingsAppear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.settingsAppear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingsAppear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showTableHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showUploadSong);
} }
class UserProfileComponent {
    constructor(storageService, authenticationService) {
        this.storageService = storageService;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.storageService.getCurrentUser().subscribe(data => {
            this.res = data;
            this.user = this.res.user;
            console.log(this.user);
            this.oldValues = this.user.description;
            this.user.image = this.user.image;
            if (this.user.image == null) {
                this.user.image = "../../assets/img/account_circle-24px.svg";
            }
        });
        //Ochando 5fce7127c91df933046b0d8a
        //Juanma 5fda5e3291ea0200173870d0
        // this.userService.getUser("5fda5e3291ea0200173870d0").subscribe(
        //   res => { 
        //     this.user = res.user;
        //     this.oldValues = this.user.description;
        //     if(this.user.image == null){
        //       this.user.image = "../../assets/img/account_circle-24px.svg"
        //     }
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // );
        this.imgRute = "../../assets/img/";
        this.imgRuteActually = this.imgRute;
        this.imageDefault = "account_circle-24px.svg";
        this.imageActually = this.imageDefault;
        this.settingsAppear = false;
        this.showTableHeader = false;
        this.showUploadSong = false;
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
        this.showUploadSong = false;
        this.showTableHeader = true;
        this.getSongs();
    }
    getSongs() {
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
            <td><div id="musicPlayer-icon"><button type="button" class="btn btn-outline-dark btn-sm">Play</button></div></td>
          </tr>
          `;
                }
            }
        };
    }
    logout() {
        this.authenticationService.logout().subscribe(response => { if (response) {
            this.storageService.logout();
        } });
    }
    uploadSong() {
        this.showTableHeader = false;
        this.showUploadSong = true;
        console.log("funciona");
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 2, vars: 1, consts: [["name", "viewport", "content", "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"], ["id", "naturalContainer", 4, "ngIf"], ["id", "naturalContainer"], ["id", "container"], ["id", "profile-header"], ["id", "image-profile"], ["id", "user-icon", 3, "src"], ["class", "custom-file", 4, "ngIf"], ["id", "info-profile"], ["id", "settings-icon", 3, "click"], ["src", "../../assets/img/settings-24px.svg", "onclick", ""], ["id", "userName"], ["id", "completeName"], ["id", "temporal", 2, "display", "none"], [4, "ngIf"], ["type", "button", "class", "btn btn-dark btn-sm", "id", "saveChanges", 3, "click", 4, "ngIf"], ["id", "profile-main"], ["id", "mySongs-header"], ["id", "profile-main-mySongs", 3, "click"], ["id", "profile-main-upload", 3, "click"], ["id", "mySongs-main", 4, "ngIf"], ["id", "uploadSong-container", 4, "ngIf"], [1, "custom-file"], ["type", "file", "id", "customFile", 1, "custom-file-input"], ["for", "customFile", 1, "custom-file-label"], ["id", "biography-input", "type", "text", "placeholder", "Write your biography", "maxlength", "110", 3, "value"], ["id", "biography"], ["type", "button", "id", "saveChanges", 1, "btn", "btn-dark", "btn-sm", 3, "click"], ["id", "mySongs-main"], [1, "table", "table-striped", "table-white"], ["id", "tableHeader"], ["scope", "col"], ["id", "tableBody"], ["id", "uploadSong-container"], ["id", "uploadSong"], ["id", "uploadSong-input", "type", "file"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserProfileComponent_section_1_Template, 28, 10, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#naturalContainer[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100% - 90px);\n}\n\n#container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 60%;\n  height: 100%;\n}\n\n#profile-header[_ngcontent-%COMP%] {\n  background: linear-gradient(115deg, #EC2E26 -20%, transparent 110%);\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n#image-profile[_ngcontent-%COMP%] {\n  float: left;\n  width: 20%;\n  height: 100%;\n}\n\n#user-icon[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-top: 8%;\n  width: 80%;\n  height: 78%;\n}\n\n#info-profile[_ngcontent-%COMP%] {\n  float: left;\n  width: 80%;\n  height: 100%;\n}\n\n#settings-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  float: right;\n  cursor: pointer;\n  padding: 5px;\n}\n\n.custom-file[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-bottom: 3px;\n  width: 172px;\n}\n\n#userName[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: x-large;\n  font-family: Arial;\n}\n\n#completeName[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: medium;\n  font-family: Arial;\n}\n\n#biography-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 70% !important;\n  font-size: 0.8rem !important;\n  margin-left: 18px;\n  margin-top: 20px;\n}\n\n#biography[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: small;\n  font-family: Arial;\n}\n\n#saveChanges[_ngcontent-%COMP%] {\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  margin-bottom: 3px;\n  margin-right: 5px;\n  height: calc(1.5em + .75rem + 2px);\n}\n\n#profile-main[_ngcontent-%COMP%] {\n  background-color: #FFFFFF;\n  width: 100%;\n  height: 70%;\n}\n\n#mySongs-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8%;\n  border-bottom: #A09F9F solid 0.2px;\n  background-color: #3e444a;\n  color: #FFFFFF;\n}\n\n#profile-main-mySongs[_ngcontent-%COMP%] {\n  float: left;\n  cursor: pointer;\n  padding: 10px 10px 10px 10px;\n  margin-left: 30px;\n  margin-top: 4px;\n}\n\n#profile-main-mySongs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: medium;\n  font-family: Arial;\n}\n\n#profile-main-upload[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n  padding: 10px 10px 10px 10px;\n  margin-right: 20px;\n  margin-top: 4px;\n}\n\n#profile-main-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: medium;\n  font-family: Arial;\n}\n\n#mySongs-main[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin: 0 0 114px 0;\n}\n\n#biography-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n#transparent[_ngcontent-%COMP%] {\n  height: 110px;\n}\n\n#uploadSong-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#uploadSong[_ngcontent-%COMP%] {\n  width: 200px;\n  height: auto;\n  margin-left: 32.5%;\n  margin-top: 100px;\n}\n\n#uploadSong-input[_ngcontent-%COMP%] {\n  background-color: #94a2b1;\n  padding: 50px;\n}\n\n@media screen and (max-width: 800px) {\n  #container[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 100%;\n    height: 100%;\n  }\n\n  #info-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: small;\n  }\n\n  #mySongs-main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  #mySongs-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: small;\n  }\n\n  #profile-main-mySongs[_ngcontent-%COMP%] {\n    float: left;\n    padding: 5px 5px 5px 5px;\n    margin-left: 20px;\n    margin-top: 2px;\n  }\n\n  #profile-main-mySongs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: medium;\n    font-family: Arial;\n  }\n\n  #profile-main-upload[_ngcontent-%COMP%] {\n    float: right;\n    padding: 5px 5px 5px 5px;\n    margin-right: 20px;\n    margin-top: 2px;\n  }\n\n  #profile-main-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: medium;\n    font-family: Arial;\n  }\n\n  #uploadSong-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  #uploadSong[_ngcontent-%COMP%] {\n    width: 20%;\n    height: auto;\n    margin-left: 8%;\n    margin-top: 100px;\n  }\n\n  #uploadSong-input[_ngcontent-%COMP%] {\n    background-color: #94a2b1;\n    padding: 10%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxtRUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQWdCQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFiSjs7QUFnQkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFiSjs7QUFnQkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFiSjs7QUFnQkE7RUFDSSxtQkFBQTtBQWJKOztBQWdCQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0VBQUE7QUFiSjs7QUFnQkE7RUFDSSxhQUFBO0FBYko7O0FBZ0JBO0VBQ0ksV0FBQTtBQWJKOztBQWdCQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWJKOztBQWdCQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtBQWJKOztBQWdCQTtFQUVJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBZE47O0VBaUJFO0lBQ0ksZ0JBQUE7RUFkTjs7RUFpQkU7SUFDSSxXQUFBO0VBZE47O0VBaUJFO0lBQ0ksZ0JBQUE7RUFkTjs7RUFpQkU7SUFDSSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7RUFkTjs7RUFpQkU7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFkTjs7RUE4QkU7SUFDSSxZQUFBO0lBQ0Esd0JBQUE7SUFDQSxrQkFBQTtJQUNBLGVBQUE7RUEzQk47O0VBOEJFO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBM0JOOztFQThCRTtJQUNJLFdBQUE7RUEzQk47O0VBOEJFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUEzQk47O0VBOEJFO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0VBM0JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdHVyYWxDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCk7XHJcbn1cclxuXHJcbiNjb250YWluZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3Byb2ZpbGUtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTVkZWcsICNFQzJFMjYgLTIwJSwgdHJhbnNwYXJlbnQgMTEwJSk7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzAlO1xyXG59XHJcblxyXG4jaW1hZ2UtcHJvZmlsZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiN1c2VyLWljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDglO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogNzglO1xyXG59XHJcblxyXG4jaW5mby1wcm9maWxlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3NldHRpbmdzLWljb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tZmlsZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgd2lkdGg6IDE3MnB4O1xyXG59XHJcblxyXG4jdXNlck5hbWUge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG4jY29tcGxldGVOYW1lIHtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbiNiaW9ncmFwaHktaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4jYmlvZ3JhcGh5IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbiNzYXZlQ2hhbmdlcyB7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgLjc1cmVtICsgMnB4KTtcclxufVxyXG5cclxuI3Byb2ZpbGUtbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuI215U29uZ3MtaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4JTtcclxuICAgIGJvcmRlci1ib3R0b206ICNBMDlGOUYgc29saWQgMC4ycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U0NDRhO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbiNwcm9maWxlLW1haW4tbXlTb25ncyB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuI3Byb2ZpbGUtbWFpbi1teVNvbmdzIHNwYW57XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbi8vICNwcm9maWxlLW1haW4tbXlMaXN0IHtcclxuLy8gICAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4vLyAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4vLyB9XHJcblxyXG4vLyAjcHJvZmlsZS1tYWluLW15TGlzdCBzcGFue1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuLy8gICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4vLyB9XHJcblxyXG4jcHJvZmlsZS1tYWluLXVwbG9hZHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbiNwcm9maWxlLW1haW4tdXBsb2FkIHNwYW57XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbiNteVNvbmdzLW1haW4ge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGFibGV7XHJcbiAgICBtYXJnaW46IDAgMCAxMTRweCAwO1xyXG59XHJcblxyXG4jYmlvZ3JhcGh5LWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4jdHJhbnNwYXJlbnR7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG59XHJcblxyXG4jdXBsb2FkU29uZy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3VwbG9hZFNvbmd7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMzIuNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweFxyXG59XHJcblxyXG4jdXBsb2FkU29uZy1pbnB1dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEyYjE7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICBcclxuICAgICNjb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI2luZm8tcHJvZmlsZSBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgI215U29uZ3MtbWFpbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjbXlTb25ncy1oZWFkZXIgZGl2IHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIH1cclxuXHJcbiAgICAjcHJvZmlsZS1tYWluLW15U29uZ3Mge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNwcm9maWxlLW1haW4tbXlTb25ncyBzcGFue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyAjcHJvZmlsZS1tYWluLW15TGlzdCB7XHJcbiAgICAvLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvLyAgICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gI3Byb2ZpbGUtbWFpbi1teUxpc3Qgc3BhbntcclxuICAgIC8vICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLy8gICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAjcHJvZmlsZS1tYWluLXVwbG9hZHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNwcm9maWxlLW1haW4tdXBsb2FkIHNwYW57XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICN1cGxvYWRTb25nLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3VwbG9hZFNvbmd7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4XHJcbiAgICB9XHJcbiAgICBcclxuICAgICN1cGxvYWRTb25nLWlucHV0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEyYjE7XHJcbiAgICAgICAgcGFkZGluZzogMTAlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.scss']
            }]
    }], function () { return [{ type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asdru\OneDrive\Escritorio\RymLive\src\main.ts */"zUnb");


/***/ }),

/***/ "4hj4":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: NgbdAlertSelfclosing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdAlertSelfclosing", function() { return NgbdAlertSelfclosing; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





const _c0 = ["staticAlert"];
const _c1 = ["selfClosingAlert"];
function NgbdAlertSelfclosing_ngb_alert_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closed", function NgbdAlertSelfclosing_ngb_alert_0_Template_ngb_alert_closed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.staticAlertClosed = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error, pruebe con otras credenciales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NgbdAlertSelfclosing {
    constructor() {
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.staticAlertClosed = false;
        this.successMessage = '';
    }
    ngOnInit() {
        setTimeout(() => this.staticAlert.close(), 5000);
    }
    changeSuccessMessage() { this._success.next(`${new Date()} - Message successfully changed.`); }
}
NgbdAlertSelfclosing.ɵfac = function NgbdAlertSelfclosing_Factory(t) { return new (t || NgbdAlertSelfclosing)(); };
NgbdAlertSelfclosing.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgbdAlertSelfclosing, selectors: [["ngbd-alert-selfclosing"]], viewQuery: function NgbdAlertSelfclosing_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.staticAlert = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selfClosingAlert = _t.first);
    } }, decls: 1, vars: 1, consts: [["type", "danger", "animation", "true", 3, "closed", 4, "ngIf"], ["type", "danger", "animation", "true", 3, "closed"], ["staticAlert", ""]], template: function NgbdAlertSelfclosing_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgbdAlertSelfclosing_ngb_alert_0_Template, 3, 0, "ngb-alert", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.staticAlertClosed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAlert"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgbdAlertSelfclosing, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-alert-selfclosing',
                templateUrl: './alert.component.html'
            }]
    }], null, { staticAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['staticAlert', { static: false }]
        }], selfClosingAlert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['selfClosingAlert', { static: false }]
        }] }); })();


/***/ }),

/***/ "AvSG":
/*!*********************************************!*\
  !*** ./src/app/shared/authorizatedGuard.ts ***!
  \*********************************************/
/*! exports provided: AuthorizatedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizatedGuard", function() { return AuthorizatedGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "n90K");




class AuthorizatedGuard {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    canActivate() {
        if (this.storageService.isAuthenticated()) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/home']);
        return false;
    }
}
AuthorizatedGuard.ɵfac = function AuthorizatedGuard_Factory(t) { return new (t || AuthorizatedGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"])); };
AuthorizatedGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizatedGuard, factory: AuthorizatedGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizatedGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }]; }, null); })();


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
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./music-player/music-player.component */ "aF0u");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");
/* harmony import */ var ngx_plyr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-plyr */ "pr9R");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "u+pc");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./alert/alert.component */ "4hj4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/storage.service */ "n90K");
/* harmony import */ var _shared_authorizatedGuard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/authorizatedGuard */ "AvSG");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_storage_service__WEBPACK_IMPORTED_MODULE_17__["StorageService"],
        _shared_authorizatedGuard__WEBPACK_IMPORTED_MODULE_18__["AuthorizatedGuard"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            ngx_plyr__WEBPACK_IMPORTED_MODULE_12__["PlyrModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
        _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_10__["MusicPlayerComponent"],
        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"],
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_15__["NgbdAlertSelfclosing"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
        ngx_plyr__WEBPACK_IMPORTED_MODULE_12__["PlyrModule"],
        _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                    _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_10__["MusicPlayerComponent"],
                    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_11__["UserProfileComponent"],
                    _alert_alert_component__WEBPACK_IMPORTED_MODULE_15__["NgbdAlertSelfclosing"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["NoopAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
                    ngx_plyr__WEBPACK_IMPORTED_MODULE_12__["PlyrModule"],
                    _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"]
                ],
                providers: [
                    _services_storage_service__WEBPACK_IMPORTED_MODULE_17__["StorageService"],
                    _shared_authorizatedGuard__WEBPACK_IMPORTED_MODULE_18__["AuthorizatedGuard"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
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
    constructor() { }
    ngOnInit() {
        this.musicRute = "../../assets/music/";
        this.musicList = ['1 - J Balvin - Brillo.mp3', '2 - Ozuna - La Modelo.mp3', '5 - Aitana - Lo Malo.mp3'];
        this.songSelected = 0;
        this.musicListLength = 2;
        this.songName = this.musicList[this.songSelected].toString().substring(0, this.musicList[this.songSelected].length - 4);
        this.audio = [
            {
                src: this.musicRute + this.musicList[this.songSelected],
                type: 'audio/mp3',
                id: 'song',
            }
        ];
    }
    ;
    play() {
        this.player.play(); // or this.plyr.player.play()
    }
    pause() {
        this.player.pause(); // or this.plyr.player.play()
    }
    stop() {
        this.player.stop(); // or this.plyr.player.stop()
    }
    oneMore() {
        if (this.songSelected === this.musicListLength) {
            this.songSelected = 0;
        }
        else {
            this.songSelected++;
        }
        this.listenMusic = this.musicRute + this.musicList[this.songSelected];
        this.songChanges();
    }
    oneLess() {
        if (this.songSelected === 0) {
            this.songSelected = this.musicListLength;
        }
        else {
            this.songSelected--;
        }
        this.listenMusic = this.musicRute + this.musicList[this.songSelected];
        this.songChanges();
    }
    songChanges() {
        this.songName = this.musicList[this.songSelected].toString().substring(0, this.musicList[this.songSelected].length - 4);
        this.audio = [
            {
                src: this.musicRute + this.musicList[this.songSelected],
                type: 'audio/mp3',
                id: 'song',
            }
        ];
    }
}
MusicPlayerComponent.ɵfac = function MusicPlayerComponent_Factory(t) { return new (t || MusicPlayerComponent)(); };
MusicPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MusicPlayerComponent, selectors: [["app-music-player"]], decls: 8, vars: 4, consts: [["id", "songListening"], ["id", "songName"], ["id", "oneLess", 3, "click"], ["src", "../assets/img/skip_previous-white-18dp.svg"], ["id", "oneMore", 3, "click"], ["src", "../assets/img/skip_next-white-18dp.svg"], ["id", "music-player", "mat-card-image", "", "plyr", "", "loadSprite", "", "plyrTitle", "Audio", "plyrType", "audio", 1, "music-player", 3, "plyrPlaysInline", "plyrCrossOrigin", "plyrSources"]], template: function MusicPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicPlayerComponent_Template_div_click_3_listener() { return ctx.oneLess(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MusicPlayerComponent_Template_div_click_5_listener() { return ctx.oneMore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.songName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("plyrPlaysInline", true)("plyrCrossOrigin", true)("plyrSources", ctx.audio);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"], ngx_plyr__WEBPACK_IMPORTED_MODULE_2__["PlyrComponent"]], styles: ["@media screen and (max-width: 700px) {\n  .music-player[_ngcontent-%COMP%]     .plyr__controls {\n    background-color: #282828;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .plyr__controls {\n    color: #FFF;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .plyr__progress {\n    position: relative;\n    left: 0;\n    bottom: 0;\n    margin-top: 16%;\n    margin-left: 17.5%;\n    margin-bottom: 1%;\n    width: 60%;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .plyr__controls .plyr__controls__item:first-child {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    margin-left: 45%;\n    margin-bottom: 12%;\n    z-index: 1;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .plyr__controls .plyr__controls__item.plyr__time {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    margin-left: 80%;\n    margin-bottom: 3.5%;\n    z-index: 1;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .plyr__volume input[type=range] {\n    position: absolute;\n    width: 60%;\n    left: 0;\n    bottom: 0;\n    margin-left: 6px;\n    margin-bottom: 3%;\n    z-index: 2;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .plyr__volume {\n    position: absolute;\n    bottom: 0;\n    width: 20%;\n    margin-bottom: 13%;\n  }\n\n  .music-player[_ngcontent-%COMP%]     button:not(:disabled), [type=button][_ngcontent-%COMP%]:not(:disabled), [type=reset][_ngcontent-%COMP%]:not(:disabled), [type=submit][_ngcontent-%COMP%]:not(:disabled) {\n    cursor: pointer;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    margin-left: -25px;\n    margin-bottom: -4px;\n  }\n\n  #songListening[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #282828;\n    font-size: x-small;\n    left: 0;\n    bottom: 0;\n    margin-left: 2%;\n    margin-bottom: 10%;\n    z-index: 1;\n  }\n\n  #oneMore[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #282828;\n    left: 0;\n    bottom: 0;\n    margin-left: 55%;\n    margin-bottom: 12%;\n    z-index: 1;\n  }\n\n  #oneMore[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    background-color: rgba(0, 204, 255, 0.979);\n    border-radius: 10%;\n  }\n\n  #oneLess[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #282828;\n    left: 0;\n    bottom: 0;\n    margin-left: 35%;\n    margin-bottom: 12%;\n    z-index: 1;\n  }\n\n  #oneLess[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    background-color: rgba(0, 204, 255, 0.979);\n    border-radius: 10%;\n  }\n\n  div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n  }\n}\n@media screen and (min-width: 700px) {\n  .music-player[_ngcontent-%COMP%]     .plyr__controls {\n    background-color: #282828;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .plyr__controls {\n    color: #FFF;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .plyr__progress {\n    position: relative;\n    left: 0;\n    bottom: 0;\n    margin-top: 3%;\n    margin-left: 30.5%;\n    margin-bottom: 0.5%;\n    width: 48%;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .plyr__controls .plyr__controls__item:first-child {\n    position: absolute;\n    left: 0;\n    bottom: -5px;\n    margin-left: 49%;\n    margin-bottom: 3.2%;\n    z-index: 1;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .plyr__controls .plyr__controls__item.plyr__time {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    margin-left: 73%;\n    margin-bottom: 1%;\n    z-index: 1;\n  }\n\n  #songListening[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #282828;\n    left: 0;\n    bottom: 0;\n    margin-left: 2%;\n    margin-bottom: 1.5%;\n    z-index: 1;\n  }\n\n  #oneMore[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #282828;\n    left: 0;\n    cursor: pointer;\n    bottom: -5px;\n    margin-left: 54%;\n    margin-bottom: 3.2%;\n    z-index: 1;\n  }\n\n  #oneMore[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    background-color: rgba(0, 204, 255, 0.979);\n    border-radius: 10%;\n  }\n\n  #oneLess[_ngcontent-%COMP%] {\n    position: absolute;\n    background-color: #282828;\n    cursor: pointer;\n    left: 0;\n    bottom: -5px;\n    margin-left: 44%;\n    margin-bottom: 3.2%;\n    z-index: 1;\n  }\n\n  #oneLess[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    background-color: rgba(0, 204, 255, 0.979);\n    border-radius: 10%;\n  }\n\n  div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMtcGxheWVyL211c2ljLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0kseUJBQUE7RUFDTjs7RUFDRTtJQUNJLFdBQUE7RUFFTjs7RUFDRTtJQUNJLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7RUFFTjs7RUFDRTtJQUNJLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtFQUVOOztFQUNFO0lBQ0ksa0JBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VBRU47O0VBQ0U7SUFDSSxrQkFBQTtJQUNBLFVBQUE7SUFDQSxPQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxVQUFBO0VBRU47O0VBQ0U7SUFDSSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUFFTjs7RUFDRTtJQUNJLGVBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQUVOOztFQUFFO0lBQ0ksa0JBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VBR047O0VBREU7SUFDSSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsVUFBQTtFQUlOOztFQURFO0lBQ0ksMENBQUE7SUFDQSxrQkFBQTtFQUlOOztFQUZFO0lBQ0ksa0JBQUE7SUFDQSx5QkFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUFLTjs7RUFIRTtJQUNJLDBDQUFBO0lBQ0Esa0JBQUE7RUFNTjs7RUFKRTtJQUNJLFdBQUE7RUFPTjtBQUNGO0FBTEE7RUFDSTtJQUNJLHlCQUFBO0VBT047O0VBTEU7SUFDSSxXQUFBO0VBUU47O0VBTkU7SUFDSSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VBU047O0VBUEU7SUFDSSxrQkFBQTtJQUNBLE9BQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUFVTjs7RUFSRTtJQUNJLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsVUFBQTtFQVdOOztFQVRFO0lBQ0ksa0JBQUE7SUFDQSx5QkFBQTtJQUNBLE9BQUE7SUFDQSxTQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQVlOOztFQVZFO0lBQ0ksa0JBQUE7SUFDQSx5QkFBQTtJQUNBLE9BQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VBYU47O0VBVkU7SUFDSSwwQ0FBQTtJQUNBLGtCQUFBO0VBYU47O0VBWEU7SUFDSSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsZUFBQTtJQUNBLE9BQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUFjTjs7RUFaRTtJQUNJLDBDQUFBO0lBQ0Esa0JBQUE7RUFlTjs7RUFiRTtJQUNJLFdBQUE7RUFnQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL211c2ljLXBsYXllci9tdXNpYy1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAucGx5cl9fY29udHJvbHN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgIH1cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5wbHlyX19jb250cm9sc3tcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxuICAgIC8vUmVwcm9kdWN0b3JcclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5wbHlyX19wcm9ncmVzcyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTcuNSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgIH1cclxuICAgIC8vQm90b24gcGxheVxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLnBseXJfX2NvbnRyb2xzIC5wbHlyX19jb250cm9sc19faXRlbTpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAvL0NvbnRhZG9yIHNlZ3VuZG9zXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAucGx5cl9fY29udHJvbHMgLnBseXJfX2NvbnRyb2xzX19pdGVtLnBseXJfX3RpbWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogODAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMuNSU7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgIC8vQm90b24gVm9sdW1lblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLnBseXJfX3ZvbHVtZSBpbnB1dFt0eXBlPXJhbmdlXSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgfVxyXG4gICAgLy9CYXJyYSBWb2x1bWVuXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAucGx5cl9fdm9sdW1lIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTMlO1xyXG4gICAgfVxyXG4gICAgLy9BanVzdGVzXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCBidXR0b246bm90KDpkaXNhYmxlZCksIFt0eXBlPWJ1dHRvbl06bm90KDpkaXNhYmxlZCksIFt0eXBlPXJlc2V0XTpub3QoOmRpc2FibGVkKSwgW3R5cGU9c3VibWl0XTpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTRweDtcclxuICAgIH1cclxuICAgICNzb25nTGlzdGVuaW5ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAjb25lTW9yZXtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODsgIFxyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1NSU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTIlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAjb25lTW9yZSA6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDIwNCwgMjU1LCAwLjk3OSk7ICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB9XHJcbiAgICAjb25lTGVzc3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEyJTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgI29uZUxlc3MgOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAyMDQsIDI1NSwgMC45NzkpOyAgXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG4gICAgfVxyXG4gICAgZGl2IGltZ3tcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCl7XHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAucGx5cl9fY29udHJvbHN7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgIH1cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5wbHlyX19jb250cm9sc3tcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5wbHlyX19wcm9ncmVzcyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMC41JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjUlO1xyXG4gICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICB9XHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAucGx5cl9fY29udHJvbHMgLnBseXJfX2NvbnRyb2xzX19pdGVtOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ5JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjIlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAucGx5cl9fY29udHJvbHMgLnBseXJfX2NvbnRyb2xzX19pdGVtLnBseXJfX3RpbWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNzMlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAjc29uZ0xpc3RlbmluZ3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41JTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICAgI29uZU1vcmV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7ICBcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDU0JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjIlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAjb25lTW9yZSA6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDIwNCwgMjU1LCAwLjk3OSk7ICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB9XHJcbiAgICAjb25lTGVzc3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IC01cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ0JTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjIlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgICAjb25lTGVzcyA6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDIwNCwgMjU1LCAwLjk3OSk7ICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgICB9XHJcbiAgICBkaXYgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
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
/* harmony import */ var _shared_authorizatedGuard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/authorizatedGuard */ "AvSG");



const routes = [
    { path: 'home', component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"] },
    { path: 'profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"], canActivate: [_shared_authorizatedGuard__WEBPACK_IMPORTED_MODULE_2__["AuthorizatedGuard"]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/global */ "p9xo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AuthenticationService {
    constructor(_http) {
        this._http = _http;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_2__["Global"].url;
    }
    login(loginObj) {
        return this._http.post(this.url + '/login', loginObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    // login(email: String, password: String) {
    //   return  this._http.get<Res>(this.url+'/login?'+ email + password);
    // }
    logout() {
        return this._http.post(this.url + 'logout', {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    extractData(res) {
        let body = res;
        console.log(body);
        return body;
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "q4sD");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_loginObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loginObject */ "yv2A");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../alert/alert.component */ "4hj4");











const _c0 = ["submitUserError"];
function HeaderComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.popUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.profile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_h3_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sing In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_div_13_Template_div_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.submitLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_13_Template_input__ngModel__3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_13_Template_input__ngModel__5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.username; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_13_Template_input__ngModel__7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.email; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_13_Template_input__ngModel__9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.password; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.registerForm);
} }
function HeaderComponent_h3_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_div_15_Template_div_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.submitLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_15_Template_input__ngModel__3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.email; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_15_Template_input__ngModel__5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.password; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.loginForm);
} }
function HeaderComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_16_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.toggleRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_17_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_17_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.toggleRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.submitLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.submitLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ngbd_alert_selfclosing_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngbd-alert-selfclosing");
} }
class HeaderComponent {
    constructor(formBuilder, authenticationService, storageService, router) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.storageService = storageService;
        this.router = router;
        this.submitted = false;
        this.error = null;
        this.name = "";
        this.username = "";
        this.password = "";
        this.email = "";
    }
    ngOnInit() {
        this.logged = false;
        this.currentSession = this.storageService.getCurrentSession();
        if (this.currentSession)
            this.logged = true;
        this.register = false;
        this.errorr = false;
        // this.loginForm = this.formBuilder.group({
        //   Name:['', [Validators.pattern(/^\D+$/)]],
        //   Username:['', [Validators.required, Validators.pattern(/^\D+$/)]],
        //   Password:['', [Validators.required]],
        //   Email:['', [Validators.email]]
        // })
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.registerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\D+$/)]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
    }
    submitLogin() {
        this.submitted = true;
        this.error = null;
        if (this.loginForm.valid) {
            this.logged = true;
            this.authenticationService.login(new _shared_loginObject__WEBPACK_IMPORTED_MODULE_3__["LoginObject"](this.loginForm.value)).subscribe(data => this.correctLogin(data), error => this.error = JSON.parse(error._body));
            var overlay = document.getElementById('overlay').classList.remove('active');
            var popup = document.getElementById('popup').classList.remove('active');
        }
    }
    correctLogin(data) {
        console.log(data.user);
        this.storageService.setCurrentSession(data);
        this.router.navigate(['/profile']);
    }
    // async submit(){
    //   if(this.loginForm.invalid){
    //     this.errorr = true;
    //     return;
    //   }
    //   this.errorr = true;
    //   try {
    //     //Buscar en db el user
    //     this.userService.getUser("5fda5e3291ea0200173870d0");
    //   }catch(e){
    //     console.log(e);
    //   }
    //   var overlay = document.getElementById('overlay').classList.remove('active');
    //   var popup = document.getElementById('popup').classList.remove('active');
    // }
    toggleRegister() {
        if (this.register === true) {
            this.register = false;
            document.getElementById("submitButton").style.marginLeft = "-12%";
        }
        else if (this.register === false) {
            this.register = true;
            document.getElementById("submitButton").style.marginLeft = "-24%";
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
    logout() {
        this.logged = false;
        this.currentSession = this.storageService.logout();
    }
    profile() {
        this.router.navigate(['/profile']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitUserError = _t.first);
    } }, decls: 21, vars: 13, consts: [[1, "header"], ["routerLink", "/home", 1, "logo"], ["src", "../../assets/img/rymLive logo.png", "alt", "rymLiveLogo"], [1, "header-left"], ["class", "header-right", 3, "click", 4, "ngIf"], ["class", "logout-menu", 3, "click", 4, "ngIf"], ["class", "profile-menu", 3, "click", 4, "ngIf"], ["id", "overlay", 1, "overlay"], ["id", "popup", 1, "popup", 3, "formGroup"], ["id", "btn-close-popup", 1, "btn-close-popup"], ["src", "../../assets/img/close-24px.svg", "alt", ""], [4, "ngIf"], ["role", "form", "id", "login-form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "register", 3, "click", 4, "ngIf"], ["id", "submitButton", "type", "submit", "class", "btn btn-dark", "form", "login-form", 3, "click", 4, "ngIf"], ["id", "submitButton", "type", "submit", "class", "btn btn-dark", "form", "login-form", "style", "margin-left: -80px;", 3, "click", 4, "ngIf"], [1, "header-right", 3, "click"], ["id", "btn-open-popup", 1, "browserSpan"], [1, "logout-menu", 3, "click"], [1, "logout-menu", "button"], [1, "profile-menu", 3, "click"], [1, "profile-menu", "button"], ["role", "form", "id", "login-form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["lForm", "ngForm"], [1, "container-inputs"], ["formControlName", "name", "type", "text", "id", "name", "name", "name", "value", "", "placeholder", "Name", 3, "[ngModel]"], ["formControlName", "username", "type", "text", "id", "user", "name", "user", "value", "", "placeholder", "Username", 3, "[ngModel]"], ["formControlName", "email", "type", "text", "id", "email", "name", "email", "value", "", "placeholder", "Email", 3, "[ngModel]"], ["formControlName", "password", "type", "password", "id", "password", "name", "password", "placeholder", "Password", 3, "[ngModel]"], ["formControlName", "email", "type", "text", "id", "email", "name", "email", "placeholder", "Email", 3, "[ngModel]"], ["id", "register", 3, "click"], ["id", "submitButton", "type", "submit", "form", "login-form", 1, "btn", "btn-dark", 3, "click"], ["id", "submitButton", "type", "submit", "form", "login-form", 1, "btn", "btn-dark", 2, "margin-left", "-80px", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_4_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_h3_11_Template, 2, 0, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 11, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_h3_14_Template, 2, 0, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_div_15_Template, 7, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_a_16_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_a_17_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_button_18_Template, 2, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_button_19_Template, 2, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_ngbd_alert_selfclosing_20_Template, 1, 0, "ngbd-alert-selfclosing", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.register);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["NgbdAlertSelfclosing"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #616161;\n  width: 100%;\n}\n\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  color: #fff;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.header-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #282828;\n  color: #fff;\n  cursor: pointer;\n}\n\n.header-left[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20px;\n  float: left;\n  margin-left: 32px;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20px;\n  float: right;\n  margin-right: 32px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  visibility: hidden;\n  z-index: 1;\n}\n\n.overlay.active[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.popup[_ngcontent-%COMP%] {\n  background: #F8F8F8;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 20px;\n  text-align: center;\n  width: 600px;\n  transition: 0.3s ease all;\n  transform: scale(0.7);\n  opacity: 0;\n}\n\n.popup[_ngcontent-%COMP%]   .btn-close-popup[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 16px;\n  display: block;\n  cursor: pointer;\n  text-align: right;\n  transition: 0.3s ease all;\n  color: #BBBBBB;\n}\n\n.popup[_ngcontent-%COMP%]   .btn-close-popup[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n\n.popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  opacity: 0;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  height: 52px;\n  font-size: 18px;\n  line-height: 52px;\n  border: 1px solid #BBBBBB;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 40px;\n  line-height: 40px;\n  border: none;\n  color: #fff;\n  background: #07090f;\n  border-radius: 3px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.3s ease all;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover {\n  background: rgba(50, 51, 53, 0.9);\n}\n\n\n\n\n\n\n\n.popup.active[_ngcontent-%COMP%] {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.popup.active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  animation: entradaTitulo 0.8s ease 0.5s forwards;\n}\n\n.popup.active[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  animation: entradaSubtitulo 0.8s ease 0.5s forwards;\n}\n\n.popup.active[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%] {\n  animation: entradaInputs 1s linear 1s forwards;\n}\n\n@keyframes entradaTitulo {\n  from {\n    opacity: 0;\n    transform: translateY(-25px);\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes entradaSubtitulo {\n  from {\n    opacity: 0;\n    transform: translateY(25px);\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes entradaInputs {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n#submitButton[_ngcontent-%COMP%] {\n  margin-left: -50px;\n}\n\n#register[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 10px;\n}\n\n#browser[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.browserSpan[_ngcontent-%COMP%] {\n  font-size: large !important;\n}\n\nngbd-alert-selfclosing[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  right: 8px;\n  top: 100px;\n}\n\n.logout-menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10px;\n  float: right;\n  margin-right: 32px;\n}\n\n.profile-menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10px;\n  float: right;\n  margin-right: 16px;\n}\n\n@media screen and (max-width: 800px) {\n  #browser[_ngcontent-%COMP%] {\n    font-size: small;\n  }\n\n  .browserSpan[_ngcontent-%COMP%] {\n    font-size: small !important;\n  }\n\n  .header-right[_ngcontent-%COMP%] {\n    margin-right: 16px;\n  }\n\n  .header-left[_ngcontent-%COMP%] {\n    margin-left: 16px;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-left: 16px;\n  }\n\n  .popup[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n\n  #register[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n\n  .popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 30px;\n    margin-bottom: 15px;\n  }\n\n  .popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxpQ0FBQTtBQUZKOztBQUtBLDhCQUFBOztBQUNBLGdCQUFBOztBQUNBLDhCQUFBOztBQUNBO0VBQWdCLG1CQUFBO0VBQXFCLFVBQUE7QUFBckM7O0FBQ0E7RUFBbUIsZ0RBQUE7QUFHbkI7O0FBRkE7RUFBbUIsbURBQUE7QUFNbkI7O0FBTEE7RUFBa0MsOENBQUE7QUFTbEM7O0FBUEE7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQVVOO0VBUEU7SUFDSSx3QkFBQTtJQUNBLFVBQUE7RUFTTjtBQUNGOztBQU5BO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUFRTjtFQUxFO0lBQ0ksd0JBQUE7SUFDQSxVQUFBO0VBT047QUFDRjs7QUFKQTtFQUNJO0lBQU8sVUFBQTtFQU9UO0VBTkU7SUFBSyxVQUFBO0VBU1A7QUFDRjs7QUFQQTtFQUNJLGtCQUFBO0FBU0o7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFOQTtFQUNJLGdCQUFBO0FBU0o7O0FBTkE7RUFDSSwyQkFBQTtBQVNKOztBQVBBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7QUFVSjs7QUFQQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVVKOztBQVBBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBVUo7O0FBUEE7RUFDSTtJQUNJLGdCQUFBO0VBVU47O0VBUkU7SUFDSSwyQkFBQTtFQVdOOztFQVRFO0lBQ0ksa0JBQUE7RUFZTjs7RUFWRTtJQUNJLGlCQUFBO0VBYU47O0VBWEU7SUFDSSxpQkFBQTtFQWNOOztFQVpFO0lBQ0ksWUFBQTtFQWVOOztFQWJFO0lBQ0ksa0JBQUE7RUFnQk47O0VBZEU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VBaUJOOztFQWZFO0lBQ0ksZUFBQTtJQUNBLGtCQUFBO0VBa0JOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFkZXIgYSwgLmhlYWRlciBzcGFue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7IFxyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4ubG9nbyBpbWd7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmhlYWRlci1sZWZ0IGE6aG92ZXIsIC5oZWFkZXItcmlnaHQgYTpob3ZlciwgLmhlYWRlci1yaWdodCBzcGFuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWxlZnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi5oZWFkZXItcmlnaHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMyk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5wb3B1cCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgXHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZSBhbGw7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucG9wdXAgLmJ0bi1jbG9zZS1wb3B1cCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZSBhbGw7XHJcbiAgICBjb2xvcjogI0JCQkJCQjtcclxufVxyXG5cclxuLnBvcHVwIC5idG4tY2xvc2UtcG9wdXA6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5wb3B1cCBoMyB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5wb3B1cCBkaXYgLmNvbnRhaW5lci1pbnB1dHMge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnBvcHVwIGRpdiAuY29udGFpbmVyLWlucHV0cyBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCQkJCQkI7XHJcbn1cclxuXHJcbi5wb3B1cCBkaXYgLmNvbnRhaW5lci1pbnB1dHMgaW5wdXRbdHlwZT10ZXh0XSwgIGlucHV0W3R5cGU9cGFzc3dvcmRde1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4ucG9wdXAgZGl2IC5idG4tc3VibWl0IHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDcwOTBmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcclxufVxyXG5cclxuLnBvcHVwIGRpdiAuYnRuLXN1Ym1pdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MSwgNTMsIDAuOSk7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogQU5JTUFDSU9ORVMgKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ucG9wdXAuYWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxyXG4ucG9wdXAuYWN0aXZlIGgzIHsgYW5pbWF0aW9uOiBlbnRyYWRhVGl0dWxvIC44cyBlYXNlIC41cyBmb3J3YXJkczsgfVxyXG4ucG9wdXAuYWN0aXZlIGg0IHsgYW5pbWF0aW9uOiBlbnRyYWRhU3VidGl0dWxvIC44cyBlYXNlIC41cyBmb3J3YXJkczsgfVxyXG4ucG9wdXAuYWN0aXZlIC5jb250YWluZXItaW5wdXRzIHsgYW5pbWF0aW9uOiBlbnRyYWRhSW5wdXRzIDFzIGxpbmVhciAxcyBmb3J3YXJkczsgfVxyXG5cclxuQGtleWZyYW1lcyBlbnRyYWRhVGl0dWxvIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZW50cmFkYVN1YnRpdHVsbyB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZW50cmFkYUlucHV0cyB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8geyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbiNzdWJtaXRCdXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbn1cclxuXHJcbiNyZWdpc3RlcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2Jyb3dzZXJ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uYnJvd3NlclNwYW57XHJcbiAgICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XHJcbn1cclxubmdiZC1hbGVydC1zZWxmY2xvc2luZyB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDhweDtcclxuICAgIHRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5sb2dvdXQtbWVudXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxufVxyXG5cclxuLnByb2ZpbGUtbWVudXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgI2Jyb3dzZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIH1cclxuICAgIC5icm93c2VyU3BhbntcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLXJpZ2h0IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWxlZnQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnBvcHVwIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICB9XHJcbiAgICAjcmVnaXN0ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgfVxyXG4gICAgLnBvcHVwIGRpdiAuY29udGFpbmVyLWlucHV0cyBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAucG9wdXAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { submitUserError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['submitUserError', { static: false }]
        }] }); })();


/***/ }),

/***/ "n90K":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/global */ "p9xo");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class StorageService {
    constructor(router, _http) {
        this.router = router;
        this._http = _http;
        this.currentSession = null;
        this.localStorageService = localStorage;
        this.currentSession = this.loadSessionData();
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["Global"].url;
    }
    setCurrentSession(session) {
        this.currentSession = session;
        console.log(session.user);
        this.localStorageService.setItem('currentUser', JSON.stringify(session));
    }
    loadSessionData() {
        var sessionStr = this.localStorageService.getItem('currentUser');
        return (sessionStr) ? JSON.parse(sessionStr) : null;
    }
    getCurrentSession() {
        return this.currentSession;
    }
    removeCurrentSession() {
        this.localStorageService.removeItem('currentUser');
        this.currentSession = null;
    }
    getCurrentUser() {
        // var session: Session = this.getCurrentSession();
        // return (session && session.user) ? session.user : null;
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token
        });
        return this._http.get(this.url + 'profile', { headers: auth });
    }
    ;
    isAuthenticated() {
        return (this.getCurrentToken() != null) ? true : false;
    }
    ;
    getCurrentToken() {
        var session = this.getCurrentSession();
        return (session && session.token) ? session.token : null;
    }
    ;
    logout() {
        this.removeCurrentSession();
        this.router.navigate(['/home']);
        console.log(this.currentSession);
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "p9xo":
/*!************************************!*\
  !*** ./src/app/services/global.ts ***!
  \************************************/
/*! exports provided: Global */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
var Global = {
    url: 'https://rymliveapi.herokuapp.com/api/'
};


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
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 28, vars: 0, consts: [[1, "title"], [1, "container"], [1, "card"], ["src", "../assets/img/ny.jpg"], ["href", "#"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "CARDS QUE JUANMA ME PIDI\u00D3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cosa1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Leer m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cosa2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Leer m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cosa3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, excepturi unde?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Leer m\u00E1s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["div[_ngcontent-%COMP%] {\n  background-color: azure;\n  right: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2000px;\n  text-align: center;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-family: sans-serif;\n  letter-spacing: 0.03em;\n  line-height: 1.6;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 40px;\n  color: #6a6a6a;\n  margin-top: 100px;\n  font-weight: 100;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  height: 430px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: auto;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 330px;\n  height: 430px;\n  border-radius: 8px;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  margin: 20px;\n  text-align: center;\n  transition: all 0.25s;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-15px);\n  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 330px;\n  height: 220px;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-decoration: none;\n  color: #3498db;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFFQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxjQUFBO0VBRUEsa0JBQUE7QUFGSjs7QUFLQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0FBRko7O0FBTUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFNQTtFQUNJLDRCQUFBO0VBQ0EsMENBQUE7QUFISjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBSEo7O0FBT0E7RUFDSSxnQkFBQTtBQUpKOztBQU9BO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG4gICBcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMDAwcHg7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5odG1sLCBib2R5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6ICM2YTZhNmE7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmR7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkIGltZ3tcclxuICAgIHdpZHRoOiAzMzBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIC5jYXJkIGg0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCBwe1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY2FyZCBhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzM0OThkYjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yv2A":
/*!***************************************!*\
  !*** ./src/app/shared/loginObject.ts ***!
  \***************************************/
/*! exports provided: LoginObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginObject", function() { return LoginObject; });
class LoginObject {
    constructor(object) {
        this.email = (object.email) ? object.email : null;
        this.password = (object.password) ? object.password : null;
    }
}


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