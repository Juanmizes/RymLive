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
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/global */ "p9xo");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _services_playlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/playlist.service */ "JGdh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function UserProfileComponent_section_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserProfileComponent_section_1_div_5_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_section_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.inSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_section_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.noInSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_section_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r4.user.description);
} }
function UserProfileComponent_section_1_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.user.description);
} }
function UserProfileComponent_section_1_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r16.saveChanges(); return ctx_r16.uploadImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_section_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_div_21_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.popupSong(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subir canci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserProfileComponent_section_1_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r20.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r20.autor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r20.views);
} }
function UserProfileComponent_section_1_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_div_36_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.closePopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Subir Cancion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UserProfileComponent_section_1_div_36_Template_input_change_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.handleFileInput($event.target.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_div_36_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.uploadSong(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r9.uploadSongForm);
} }
function UserProfileComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserProfileComponent_section_1_div_5_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserProfileComponent_section_1_div_7_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserProfileComponent_section_1_div_8_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserProfileComponent_section_1_div_13_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserProfileComponent_section_1_div_14_Template, 3, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserProfileComponent_section_1_button_15_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserProfileComponent_section_1_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.updatePlaylist(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Importar Lista");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, UserProfileComponent_section_1_div_21_Template, 3, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "thead", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Song name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Autor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Views");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, UserProfileComponent_section_1_tr_35_Template, 9, 4, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, UserProfileComponent_section_1_div_36_Template, 14, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.imageForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.url + "getImage/" + ctx_r0.user.image || ctx_r0.imageDefault, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingsAppear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.userSearched && !ctx_r0.settingsAppear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.userSearched && ctx_r0.settingsAppear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.user.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingsAppear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.settingsAppear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.settingsAppear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.userSearched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.nameSongs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showUploadSong);
} }
class UserProfileComponent {
    constructor(storageService, authenticationService, playlistService, router, formBuilder) {
        this.storageService = storageService;
        this.authenticationService = authenticationService;
        this.playlistService = playlistService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.uploadSongForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            autor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            song: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.imageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.fileToUpload = null;
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["Global"].url;
    }
    ngOnInit() {
        this.uploadSongForm = this.formBuilder.group({
            autor: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            song: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.userSearched = false;
        this.router.params.subscribe(data => {
            if (data['user']) {
                this.userSearched = true;
                this.recibeUser(data);
                this.imageDefault = "../../assets/img/account_circle-24px.svg";
                this.settingsAppear = false;
                this.showTableHeader = false;
                this.showUploadSong = false;
            }
        });
        if (this.userSearched == false) {
            this.storageService.getNameFiles().subscribe(data => {
                this.nameService = data,
                    this.nameSongs = this.nameService.song;
            });
            this.storageService.getCurrentUser().subscribe(data => {
                this.res = data;
                this.user = this.res.user;
                if (this.user.image == null) {
                    this.user.image = "../../assets/img/account_circle-24px.svg";
                }
            });
            this.imageDefault = "../../assets/img/account_circle-24px.svg";
            this.settingsAppear = false;
            this.showTableHeader = false;
            this.showUploadSong = false;
        }
    }
    inSettings() {
        if (this.userSearched == false) {
            this.settingsAppear = true;
            console.log("In settings");
        }
    }
    noInSettings() {
        if (this.userSearched == false) {
            this.settingsAppear = false;
            console.log("In settings Off");
        }
    }
    saveChanges() {
        //Change Biography
        let error = null;
        this.newValues = document.getElementById('biography-input').value;
        this.user.description = this.newValues;
        this.storageService.updateUser(this.user);
        this.settingsAppear = false;
        this.storageService.getCurrentUser().subscribe(data => {
            this.res = data;
            this.user = this.res.user;
            if (this.user.image == null) {
                this.user.image = "../../assets/img/account_circle-24px.svg";
            }
        });
    }
    uploadImage() {
        //Change Image
        const input = document.getElementById('customFile');
        if (input.files && input.files[0]) {
            console.log("File selected : ", input.files[0]);
            this.imageActually = input.files[0].name;
            //this.imgRuteActually = (document.getElementById("customFile") as HTMLInputElement).value;
        }
        else
            console.log("No file selected " + input.files[0]);
        this.user.image = this.imageActually;
        const formData = new FormData();
        formData.append('image', this.fileToUpload);
        this.storageService.updateImage(formData).subscribe(res => {
            console.log("Imagen subida : ", res);
        });
        this.storageService.getCurrentUser().subscribe(data => {
            this.res = data;
            this.user = this.res.user;
            if (this.user.image == null) {
                this.user.image = "../../assets/img/account_circle-24px.svg";
            }
        });
    }
    logout() {
        this.authenticationService.logout().subscribe(response => { if (response) {
            this.storageService.logout();
        } });
    }
    closePopup() {
        this.showTableHeader = true;
        this.showUploadSong = false;
    }
    popupSong() {
        this.showTableHeader = false;
        this.showUploadSong = true;
    }
    handleFileInput(files) {
        this.fileToUpload = files.item(0);
    }
    uploadSong() {
        let song = document.getElementById('uploadSong-archivo');
        let cadena, autor, cancion, file;
        const formData = new FormData();
        formData.append('song', this.fileToUpload);
        formData.append('title', this.uploadSongForm.get('title').value);
        formData.append('autor', this.uploadSongForm.get('autor').value);
        if (song.files && song.files[0]) {
            cadena = song.files[0].name;
            autor = cadena.split("-")[0];
            cancion = cadena.split("-")[1];
            file = song.files[0];
        }
        this.recibeSong(formData);
    }
    updatePlaylist() {
        this.playlistService.setPlaylist(this.nameSongs);
    }
    recibeUser(data) {
        this.storageService.getOtherUser(data['user']).subscribe(data => {
            this.res = data;
            this.user = this.res.user;
            if (this.user.image == null) {
                this.user.image = "../../assets/img/account_circle-24px.svg";
            }
            this.storageService.getOtherNameFiles(this.user._id).subscribe(data => {
                this.nameService = data,
                    this.nameSongs = this.nameService.song;
            });
        });
    }
    recibeSong(formData) {
        this.storageService.uploadSong(formData).subscribe(res => {
            this.storageService.getNameFiles().subscribe(data => {
                this.nameService = data,
                    this.nameSongs = this.nameService.song,
                    this.playlistService.setPlaylist(this.nameSongs);
            });
            this.closePopup();
        });
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playlist_service__WEBPACK_IMPORTED_MODULE_5__["PlaylistService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 2, vars: 1, consts: [["name", "viewport", "content", "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"], ["id", "naturalContainer", 4, "ngIf"], ["id", "naturalContainer"], ["id", "container"], ["id", "profile-header"], ["id", "image-profile", 3, "formGroup"], ["id", "user-icon", 3, "src"], ["class", "custom-file", 4, "ngIf"], ["id", "info-profile"], ["id", "settings-icon", 3, "click", 4, "ngIf"], ["id", "userName"], ["id", "completeName"], [4, "ngIf"], ["type", "button", "class", "btn btn-dark btn-sm", "id", "saveChanges", 3, "click", 4, "ngIf"], ["id", "profile-main"], ["id", "mySongs-header"], ["id", "profile-main-mySongs", 3, "click"], ["id", "profile-main-upload", 3, "click", 4, "ngIf"], ["id", "mySongs-main"], [1, "table", "table-striped", "table-white"], ["id", "tableHeader"], ["scope", "col"], ["id", "tableBody"], [4, "ngFor", "ngForOf"], ["class", "overlay", "id", "overlay", 4, "ngIf"], [1, "custom-file"], ["type", "file", "formControlName", "image", "id", "customFile", "accept", "image", 1, "custom-file-input", 3, "change"], ["id", "settings-icon", 3, "click"], ["src", "../../assets/img/settings-24px.svg", "onclick", ""], ["src", "../../assets/img/clear-24px.svg", "onclick", ""], ["id", "biography-input", "type", "text", "placeholder", "Write your biography", "maxlength", "110", 3, "value"], ["id", "biography"], ["type", "button", "id", "saveChanges", 1, "btn", "btn-dark", "btn-sm", 3, "click"], ["id", "profile-main-upload", 3, "click"], ["scope", "row"], ["id", "overlay", 1, "overlay"], ["id", "popup", 1, "popup"], ["id", "btn-close-popup", 1, "btn-close-popup", 3, "click"], ["src", "../../assets/img/close-24px.svg", "alt", ""], ["id", "uploadSong", 1, "container-inputs", 3, "formGroup"], ["id", "uploadSong-autor", "placeholder", "Autor", "type", "text", "formControlName", "autor"], ["id", "uploadSong-titulo", "placeholder", "Titulo", "type", "text", "formControlName", "title"], ["id", "uploadSong-archivo", "type", "file", "formControlName", "song", 3, "change"], ["id", "submitButton", "type", "submit", "form", "login-form", 1, "btn", "btn-dark", 3, "click"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserProfileComponent_section_1_Template, 37, 13, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: ["#naturalContainer[_ngcontent-%COMP%] {\n  padding-top: 18px;\n  width: 100%;\n  height: calc(100% - 90px);\n  background-color: #dcdde1;\n}\n\n#container[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 60%;\n  height: 100%;\n}\n\n#profile-header[_ngcontent-%COMP%] {\n  background: linear-gradient(115deg, #EC2E26 -20%, transparent 110%);\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n#image-profile[_ngcontent-%COMP%] {\n  float: left;\n  width: 20%;\n  height: 100%;\n}\n\n#user-icon[_ngcontent-%COMP%] {\n  margin-left: 10%;\n  margin-top: 8%;\n  width: 80%;\n  height: 78%;\n}\n\n#info-profile[_ngcontent-%COMP%] {\n  float: left;\n  width: 80%;\n  height: 100%;\n}\n\n#settings-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  float: right;\n  cursor: pointer;\n  padding: 5px;\n}\n\n.custom-file[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  margin-bottom: 3px;\n  width: 172px;\n}\n\n#userName[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: x-large;\n  font-family: Arial;\n}\n\n#completeName[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: medium;\n  font-family: Arial;\n}\n\n#biography-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 70% !important;\n  font-size: 0.8rem !important;\n  margin-left: 18px;\n  margin-top: 20px;\n}\n\n#biography[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-left: 20px;\n  font-weight: 500;\n  font-size: small;\n  font-family: Arial;\n}\n\n#saveChanges[_ngcontent-%COMP%] {\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  margin-bottom: 3px;\n  margin-right: 5px;\n  height: calc(1.5em + .75rem + 2px);\n}\n\n#profile-main[_ngcontent-%COMP%] {\n  background-color: #dcdde1;\n  width: 100%;\n  height: 70%;\n}\n\n#mySongs-header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8%;\n  border-bottom: #A09F9F solid 0.2px;\n  background-color: #3e444a;\n  color: #FFFFFF;\n}\n\n#profile-main-mySongs[_ngcontent-%COMP%] {\n  float: left;\n  cursor: pointer;\n  padding: 10px 10px 10px 10px;\n  margin-left: 30px;\n  margin-top: 4px;\n}\n\n#profile-main-mySongs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: medium;\n  font-family: Arial;\n}\n\n#profile-main-upload[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n  padding: 10px 10px 10px 10px;\n  margin-right: 20px;\n  margin-top: 4px;\n}\n\n#profile-main-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: medium;\n  font-family: Arial;\n}\n\n#mySongs-main[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  width: 100%;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin: 0 0 114px 0;\n}\n\n#biography-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: calc(1.5em + .75rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n#transparent[_ngcontent-%COMP%] {\n  height: 110px;\n}\n\n#uploadSong-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#uploadSong[_ngcontent-%COMP%] {\n  width: 200px;\n  width: 570px;\n  display: block;\n}\n\n#uploadSong-archivo[_ngcontent-%COMP%] {\n  margin-left: -68px;\n}\n\n#uploadSong-archivo[_ngcontent-%COMP%], #uploadSong-autor[_ngcontent-%COMP%], #uploadSong-titulo[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n@media screen and (max-width: 800px) {\n  #container[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 100%;\n    height: 100%;\n  }\n\n  #info-profile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: small;\n  }\n\n  #mySongs-main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  #mySongs-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: small;\n  }\n\n  #profile-main-mySongs[_ngcontent-%COMP%] {\n    float: left;\n    padding: 5px 5px 5px 5px;\n    margin-left: 20px;\n    margin-top: 2px;\n  }\n\n  #profile-main-mySongs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: medium;\n    font-family: Arial;\n  }\n\n  #profile-main-upload[_ngcontent-%COMP%] {\n    float: right;\n    padding: 5px 5px 5px 5px;\n    margin-right: 20px;\n    margin-top: 2px;\n  }\n\n  #profile-main-upload[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-weight: 600;\n    font-size: medium;\n    font-family: Arial;\n  }\n\n  #uploadSong-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  #uploadSong[_ngcontent-%COMP%] {\n    width: 20%;\n    height: auto;\n    margin-left: 8%;\n    margin-top: 100px;\n  }\n\n  #uploadSong-input[_ngcontent-%COMP%] {\n    background-color: #94a2b1;\n    padding: 10%;\n  }\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  z-index: 1;\n}\n\n.overlay.active[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.popup[_ngcontent-%COMP%] {\n  background: #F8F8F8;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  padding: 20px;\n  text-align: center;\n  width: 600px;\n  transition: 0.3s ease all;\n}\n\n.popup[_ngcontent-%COMP%]   .btn-close-popup[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 16px;\n  display: block;\n  cursor: pointer;\n  text-align: right;\n  transition: 0.3s ease all;\n  color: #BBBBBB;\n}\n\n.popup[_ngcontent-%COMP%]   .btn-close-popup[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n\n.popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  height: 52px;\n  font-size: 18px;\n  line-height: 52px;\n  border: 1px solid #BBBBBB;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksbUVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFnQkE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBYko7O0FBZ0JBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FBYko7O0FBZ0JBO0VBQ0ksbUJBQUE7QUFiSjs7QUFnQkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBYko7O0FBZ0JBO0VBQ0ksYUFBQTtBQWJKOztBQWdCQTtFQUNJLFdBQUE7QUFiSjs7QUFnQkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFiSjs7QUFnQkE7RUFDSSxrQkFBQTtBQWJKOztBQWdCQTtFQUNJLGFBQUE7QUFiSjs7QUFpQkE7RUFFSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQWZOOztFQWtCRTtJQUNJLGdCQUFBO0VBZk47O0VBa0JFO0lBQ0ksV0FBQTtFQWZOOztFQWtCRTtJQUNJLGdCQUFBO0VBZk47O0VBa0JFO0lBQ0ksV0FBQTtJQUNBLHdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VBZk47O0VBa0JFO0lBQ0ksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBZk47O0VBK0JFO0lBQ0ksWUFBQTtJQUNBLHdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VBNUJOOztFQStCRTtJQUNJLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQTVCTjs7RUErQkU7SUFDSSxXQUFBO0VBNUJOOztFQStCRTtJQUNJLFVBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0VBNUJOOztFQStCRTtJQUNJLHlCQUFBO0lBQ0EsWUFBQTtFQTVCTjtBQUNGOztBQStCQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUVBLFVBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksbUJBQUE7QUE5Qko7O0FBaUNBO0VBQ0ksbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBOUJKOztBQWtDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUEvQko7O0FBa0NBO0VBQ0ksV0FBQTtBQS9CSjs7QUFrQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQS9CSjs7QUFtQ0E7RUFDSSxVQUFBO0FBaENKOztBQW1DQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQWhDSiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF0dXJhbENvbnRhaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGRlMTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jcHJvZmlsZS1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDExNWRlZywgI0VDMkUyNiAtMjAlLCB0cmFuc3BhcmVudCAxMTAlKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbn1cclxuXHJcbiNpbWFnZS1wcm9maWxlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3VzZXItaWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiA3OCU7XHJcbn1cclxuXHJcbiNpbmZvLXByb2ZpbGUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jc2V0dGluZ3MtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmN1c3RvbS1maWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICB3aWR0aDogMTcycHg7XHJcbn1cclxuXHJcbiN1c2VyTmFtZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbiNjb21wbGV0ZU5hbWUge1xyXG4gICAgcGFkZGluZy10b3A6IDNweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuI2Jpb2dyYXBoeS1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNiaW9ncmFwaHkge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuI3NhdmVDaGFuZ2VzIHtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNzVyZW0gKyAycHgpO1xyXG59XHJcblxyXG4jcHJvZmlsZS1tYWluIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RkZTE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG59XHJcblxyXG4jbXlTb25ncy1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDglO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogI0EwOUY5RiBzb2xpZCAwLjJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTQ0NGE7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuI3Byb2ZpbGUtbWFpbi1teVNvbmdzIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4jcHJvZmlsZS1tYWluLW15U29uZ3Mgc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuLy8gI3Byb2ZpbGUtbWFpbi1teUxpc3Qge1xyXG4vLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbi8vIH1cclxuXHJcbi8vICNwcm9maWxlLW1haW4tbXlMaXN0IHNwYW57XHJcbi8vICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbi8vICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbi8vIH1cclxuXHJcbiNwcm9maWxlLW1haW4tdXBsb2Fke1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuI3Byb2ZpbGUtbWFpbi11cGxvYWQgc3BhbntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuI215U29uZ3MtbWFpbiB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZXtcclxuICAgIG1hcmdpbjogMCAwIDExNHB4IDA7XHJcbn1cclxuXHJcbiNiaW9ncmFwaHktaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxLjVlbSArIC43NXJlbSArIDJweCk7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM0OTUwNTc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiN0cmFuc3BhcmVudHtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbn1cclxuXHJcbiN1cGxvYWRTb25nLWNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jdXBsb2FkU29uZ3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHdpZHRoOiA1NzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4jdXBsb2FkU29uZy1hcmNoaXZvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNjhweDtcclxufVxyXG5cclxuI3VwbG9hZFNvbmctYXJjaGl2bywgI3VwbG9hZFNvbmctYXV0b3IsICN1cGxvYWRTb25nLXRpdHVsb3tcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICBcclxuICAgICNjb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgI2luZm8tcHJvZmlsZSBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgI215U29uZ3MtbWFpbntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAjbXlTb25ncy1oZWFkZXIgZGl2IHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIH1cclxuXHJcbiAgICAjcHJvZmlsZS1tYWluLW15U29uZ3Mge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNwcm9maWxlLW1haW4tbXlTb25ncyBzcGFue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyAjcHJvZmlsZS1tYWluLW15TGlzdCB7XHJcbiAgICAvLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAvLyAgICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgLy8gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gI3Byb2ZpbGUtbWFpbi1teUxpc3Qgc3BhbntcclxuICAgIC8vICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgLy8gICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgLy8gICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAjcHJvZmlsZS1tYWluLXVwbG9hZHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNwcm9maWxlLW1haW4tdXBsb2FkIHNwYW57XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICN1cGxvYWRTb25nLWNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgI3VwbG9hZFNvbmd7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwMHB4XHJcbiAgICB9XHJcbiAgICBcclxuICAgICN1cGxvYWRTb25nLWlucHV0e1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5NGEyYjE7XHJcbiAgICAgICAgcGFkZGluZzogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC4zKTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ub3ZlcmxheS5hY3RpdmUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnBvcHVwIHtcclxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcclxuICAgIC8vIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5wb3B1cCAuYnRuLWNsb3NlLXBvcHVwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcclxuICAgIGNvbG9yOiAjQkJCQkJCO1xyXG59XHJcblxyXG4ucG9wdXAgLmJ0bi1jbG9zZS1wb3B1cDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnBvcHVwIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLy8gb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnBvcHVwIGRpdiAuY29udGFpbmVyLWlucHV0cyB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucG9wdXAgZGl2IC5jb250YWluZXItaW5wdXRzIGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGhlaWdodDogNTJweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JCQkJCQjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.scss']
            }]
    }], function () { return [{ type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }, { type: _services_playlist_service__WEBPACK_IMPORTED_MODULE_5__["PlaylistService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Juanma\Desktop\RymLiveFront\RymLive\src\main.ts */"zUnb");


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

/***/ "JGdh":
/*!**********************************************!*\
  !*** ./src/app/services/playlist.service.ts ***!
  \**********************************************/
/*! exports provided: PlaylistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistService", function() { return PlaylistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlaylistService {
    constructor() {
        this.playlistChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.playlist = [];
    }
    setPlaylist(songs) {
        this.playlist = songs;
        console.log("Playlist: " + songs);
        this.playlistChange.emit(this.playlist);
    }
}
PlaylistService.ɵfac = function PlaylistService_Factory(t) { return new (t || PlaylistService)(); };
PlaylistService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlaylistService, factory: PlaylistService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, { playlistChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "MJl6":
/*!******************************************!*\
  !*** ./src/app/shared/registerObject.ts ***!
  \******************************************/
/*! exports provided: RegisterObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterObject", function() { return RegisterObject; });
class RegisterObject {
    constructor(object) {
        this.name = (object.name) ? object.name : null;
        this.username = (object.username) ? object.username : null;
        this.email = (object.email) ? object.email : null;
        this.password = (object.password) ? object.password : null;
    }
}


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
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_3__["MusicPlayerComponent"]], styles: ["app-main[_ngcontent-%COMP%] {\n  position: relative;\n}\n\napp-music-player[_ngcontent-%COMP%] {\n  color: #FFF;\n  position: fixed;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  z-index: 1;\n  text-align: center;\n}\n\napp-user-profile[_ngcontent-%COMP%]   body[_ngcontent-%COMP%] {\n  background-color: #a09f9f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksa0JBQUE7QUFKSjs7QUFNQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUVBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLWhlYWRlcntcclxuLy8gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuYXBwLW1haW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuYXBwLW11c2ljLXBsYXllcntcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmFwcC11c2VyLXByb2ZpbGUgYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDE1OSwgMTU5KTtcclxufSJdfQ== */"] });
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
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./music-player/music-player.component */ "aF0u");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "/de2");
/* harmony import */ var ngx_plyr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-plyr */ "pr9R");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "u+pc");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./alert/alert.component */ "4hj4");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/storage.service */ "n90K");
/* harmony import */ var _shared_authorizatedGuard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/authorizatedGuard */ "AvSG");
/* harmony import */ var ngx_audio_player__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-audio-player */ "cDwd");
/* harmony import */ var _services_playlist_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/playlist.service */ "JGdh");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./search/search.component */ "tq2C");


























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_storage_service__WEBPACK_IMPORTED_MODULE_20__["StorageService"],
        _shared_authorizatedGuard__WEBPACK_IMPORTED_MODULE_21__["AuthorizatedGuard"],
        _services_playlist_service__WEBPACK_IMPORTED_MODULE_23__["PlaylistService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["NoopAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            ngx_plyr__WEBPACK_IMPORTED_MODULE_15__["PlyrModule"],
            _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
            ngx_audio_player__WEBPACK_IMPORTED_MODULE_22__["NgxAudioPlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
        _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_13__["MusicPlayerComponent"],
        _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"],
        _alert_alert_component__WEBPACK_IMPORTED_MODULE_18__["NgbdAlertSelfclosing"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["NoopAnimationsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
        ngx_plyr__WEBPACK_IMPORTED_MODULE_15__["PlyrModule"],
        _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
        ngx_audio_player__WEBPACK_IMPORTED_MODULE_22__["NgxAudioPlayerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                    _music_player_music_player_component__WEBPACK_IMPORTED_MODULE_13__["MusicPlayerComponent"],
                    _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_14__["UserProfileComponent"],
                    _alert_alert_component__WEBPACK_IMPORTED_MODULE_18__["NgbdAlertSelfclosing"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_24__["SearchComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["NoopAnimationsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                    ngx_plyr__WEBPACK_IMPORTED_MODULE_15__["PlyrModule"],
                    _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__["NgbModule"],
                    ngx_audio_player__WEBPACK_IMPORTED_MODULE_22__["NgxAudioPlayerModule"]
                ],
                providers: [
                    _services_storage_service__WEBPACK_IMPORTED_MODULE_20__["StorageService"],
                    _shared_authorizatedGuard__WEBPACK_IMPORTED_MODULE_21__["AuthorizatedGuard"],
                    _services_playlist_service__WEBPACK_IMPORTED_MODULE_23__["PlaylistService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/global */ "p9xo");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _services_playlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/playlist.service */ "JGdh");
/* harmony import */ var ngx_audio_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-audio-player */ "cDwd");






class MusicPlayerComponent {
    constructor(storageService, playlistService) {
        this.storageService = storageService;
        this.playlistService = playlistService;
        this.playlist = [];
        this.url = _services_global__WEBPACK_IMPORTED_MODULE_1__["Global"].url;
    }
    ngOnInit() {
        this.nameSongs = [''];
        this.songSelected = 0,
            this.playlistService.playlistChange.subscribe(data => {
                this.nameService = data,
                    this.nameSongs = this.nameService,
                    this.musicListLength = this.nameSongs.length,
                    this.songName = this.nameSongs[this.songSelected].title + " - " + this.nameSongs[this.songSelected].autor;
                this.playlist = [];
                for (let i = 0; i < this.musicListLength; i++) {
                    this.playlist.push({
                        title: this.nameSongs[i].title + " - " + this.nameSongs[i].autor,
                        link: this.url + 'getSong/' + this.nameSongs[i].nameFile
                    });
                }
            });
        this.storageService.getNameFiles().subscribe(data => {
            this.nameService = data,
                this.nameSongs = this.nameService.song,
                this.musicListLength = this.nameSongs.length,
                this.songName = this.nameSongs[this.songSelected].title + " - " + this.nameSongs[this.songSelected].autor;
            for (let i = 0; i < this.musicListLength; i++) {
                this.playlist.push({
                    title: this.nameSongs[i].title + " - " + this.nameSongs[i].autor,
                    link: this.url + 'getSong/' + this.nameSongs[i].nameFile
                });
            }
        });
        this.songName = this.nameSongs;
    }
    ;
}
MusicPlayerComponent.ɵfac = function MusicPlayerComponent_Factory(t) { return new (t || MusicPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"])); };
MusicPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MusicPlayerComponent, selectors: [["app-music-player"]], decls: 2, vars: 7, consts: [["id", "music-player", "muted", "muted", 1, "music-player", 3, "playlist", "displayTitle", "autoPlay", "displayPlaylist", "expanded", "displayVolumeControls", "disablePositionSlider"], ["audioPlayer", ""]], template: function MusicPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-audio-player", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("playlist", ctx.playlist)("displayTitle", true)("autoPlay", false)("displayPlaylist", true)("expanded", false)("displayVolumeControls", true)("disablePositionSlider", false);
    } }, directives: [ngx_audio_player__WEBPACK_IMPORTED_MODULE_4__["AudioPlayerComponent"]], styles: ["@media screen and (max-width: 700px) {\n  .music-player[_ngcontent-%COMP%]     {\n    color: #FFF;\n    position: fixed;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    z-index: 1;\n    text-align: center;\n    background-color: #282828;\n    height: 156px;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-expansion-panel {\n    position: absolute;\n    left: 0;\n    bottom: 110px;\n    width: 100%;\n    background-color: #9e2020;\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-table {\n    background-color: #282828;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-table tr th {\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-table tr td {\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-paginator {\n    background-color: #282828;\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-select-value {\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-select-arrow {\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-button-wrapper {\n    color: lightgray;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-button-wrapper :hover {\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-button {\n    left: 30%;\n    bottom: -110px;\n    position: absolute;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .play-pause {\n    left: 44%;\n    bottom: -110px;\n    position: absolute;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .skip-next {\n    left: 58%;\n    bottom: -110px;\n    position: absolute;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-elevation-z1 div div {\n    left: 0px;\n    bottom: -125px;\n    width: 30%;\n    position: absolute;\n    margin: 1px 2px;\n    padding: 1em;\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-focus-indicator div div span {\n    font-size: x-small;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .ngx-col {\n    bottom: -155px;\n    position: absolute;\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .volume {\n    left: 80%;\n    bottom: -125px;\n    position: absolute;\n  }\n}\n@media screen and (min-width: 700px) {\n  .music-player[_ngcontent-%COMP%]     {\n    color: #FFF;\n    position: fixed;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    z-index: 1;\n    text-align: center;\n    background-color: #282828;\n    height: 156px;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-expansion-panel {\n    position: absolute;\n    left: 0;\n    bottom: 110px;\n    width: 100%;\n    background-color: #9e2020;\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-table {\n    background-color: #282828;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-table tr th {\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-table tr td {\n    color: white;\n    width: 100%;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-paginator {\n    background-color: #282828;\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-select-value {\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-select-arrow {\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-button-wrapper {\n    color: lightgray;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-button-wrapper :hover {\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-button {\n    left: 42%;\n    bottom: -100px;\n    position: absolute;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .play-pause {\n    left: 48%;\n    bottom: -100px;\n    position: absolute;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .skip-next {\n    left: 54%;\n    bottom: -100px;\n    position: absolute;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .mat-elevation-z1 div div {\n    left: 0px;\n    bottom: -125px;\n    width: 10%;\n    position: absolute;\n    margin: 1px 2px;\n    padding: 1em;\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .ngx-col {\n    left: 11%;\n    bottom: -155px;\n    width: 75%;\n    position: absolute;\n    color: white;\n  }\n\n  .music-player[_ngcontent-%COMP%]     .volume {\n    left: 95%;\n    bottom: -125px;\n    position: absolute;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXVzaWMtcGxheWVyL211c2ljLXBsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGVBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSx5QkFBQTtJQUNBLGFBQUE7RUFDTjs7RUFFRTtJQUNJLGtCQUFBO0lBQ0EsT0FBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0lBQ0EseUJBQUE7SUFDQSxZQUFBO0VBQ047O0VBRUU7SUFDSSx5QkFBQTtFQUNOOztFQUVFO0lBQ0ksWUFBQTtFQUNOOztFQUVFO0lBQ0ksWUFBQTtFQUNOOztFQUVFO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0VBQ047O0VBRUU7SUFDSSxZQUFBO0VBQ047O0VBRUU7SUFDSSxZQUFBO0VBQ047O0VBRUU7SUFDSSxnQkFBQTtFQUNOOztFQUVFO0lBQ0ksWUFBQTtFQUNOOztFQUVFO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQUNOOztFQUVFO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQUNOOztFQUVFO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQUNOOztFQUVFO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFDTjs7RUFFRTtJQUNJLGtCQUFBO0VBQ047O0VBRUU7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0VBQ047O0VBRUU7SUFDSSxTQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBQ047QUFDRjtBQUlBO0VBRUk7SUFDSSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtJQUNBLHlCQUFBO0lBQ0EsYUFBQTtFQUhOOztFQU1FO0lBQ0ksa0JBQUE7SUFDQSxPQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSx5QkFBQTtJQUNBLFlBQUE7RUFITjs7RUFNRTtJQUNJLHlCQUFBO0VBSE47O0VBTUU7SUFDSSxZQUFBO0VBSE47O0VBTUU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtFQUhOOztFQU1FO0lBQ0kseUJBQUE7SUFDQSxZQUFBO0VBSE47O0VBTUU7SUFDSSxZQUFBO0VBSE47O0VBTUU7SUFDSSxZQUFBO0VBSE47O0VBTUU7SUFDSSxnQkFBQTtFQUhOOztFQU1FO0lBQ0ksWUFBQTtFQUhOOztFQU1FO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQUhOOztFQU1FO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQUhOOztFQU1FO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQUhOOztFQU1FO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUFITjs7RUFNRTtJQUNJLFNBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLGtCQUFBO0lBQ0EsWUFBQTtFQUhOOztFQU1FO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tdXNpYy1wbGF5ZXIvbXVzaWMtcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4gICAgICAgIGhlaWdodDogMTU2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAxMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWUyMDIwOy8vI2E4MmYyZlxyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAubWF0LXRhYmxle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLm1hdC10YWJsZSB0ciB0aHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLm1hdC10YWJsZSB0ciB0ZHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLm1hdC1wYWdpbmF0b3J7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLm1hdC1zZWxlY3QtdmFsdWV7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LWFycm93e1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAubWF0LWJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlciA6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5tYXQtYnV0dG9uIHtcclxuICAgICAgICBsZWZ0OiAzMCU7XHJcbiAgICAgICAgYm90dG9tOiAtMTEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5wbGF5LXBhdXNlIHtcclxuICAgICAgICBsZWZ0OiA0NCU7XHJcbiAgICAgICAgYm90dG9tOiAtMTEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5za2lwLW5leHQge1xyXG4gICAgICAgIGxlZnQ6IDU4JTtcclxuICAgICAgICBib3R0b206IC0xMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLm1hdC1lbGV2YXRpb24tejEgZGl2IGRpdiB7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogLTEyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbjogMXB4IDJweDtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5tYXQtZm9jdXMtaW5kaWNhdG9yIGRpdiBkaXYgc3BhbntcclxuICAgICAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLm5neC1jb2wge1xyXG4gICAgICAgIGJvdHRvbTogLTE1NXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLnZvbHVtZXtcclxuICAgICAgICBsZWZ0OiA4MCU7XHJcbiAgICAgICAgYm90dG9tOiAtMTI1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLy8gLm11c2ljLXBsYXllciA6bmctZGVlcCBtYXQtc2xpZGVyICAubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsLCAubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYiwgLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWx7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2IxM2EzYTtcclxuICAgIC8vIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCl7XHJcbiAgICBcclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgICAgICBoZWlnaHQ6IDE1NnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVse1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMTEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzllMjAyMDsvLyNhODJmMmZcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLm1hdC10YWJsZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODI4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5tYXQtdGFibGUgdHIgdGh7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5tYXQtdGFibGUgdHIgdGR7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5tYXQtcGFnaW5hdG9ye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVle1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvd3tcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLm11c2ljLXBsYXllciA6Om5nLWRlZXAgLm1hdC1idXR0b24td3JhcHBlcntcclxuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIgOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAubWF0LWJ1dHRvbiB7XHJcbiAgICAgICAgbGVmdDogNDIlO1xyXG4gICAgICAgIGJvdHRvbTogLTEwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAucGxheS1wYXVzZSB7XHJcbiAgICAgICAgbGVmdDogNDglO1xyXG4gICAgICAgIGJvdHRvbTogLTEwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAuc2tpcC1uZXh0IHtcclxuICAgICAgICBsZWZ0OiA1NCU7XHJcbiAgICAgICAgYm90dG9tOiAtMTAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tdXNpYy1wbGF5ZXIgOjpuZy1kZWVwIC5tYXQtZWxldmF0aW9uLXoxIGRpdiBkaXYge1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICBib3R0b206IC0xMjVweDtcclxuICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW46IDFweCAycHg7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAubmd4LWNvbCB7XHJcbiAgICAgICAgbGVmdDogMTElO1xyXG4gICAgICAgIGJvdHRvbTogLTE1NXB4O1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubXVzaWMtcGxheWVyIDo6bmctZGVlcCAudm9sdW1le1xyXG4gICAgICAgIGxlZnQ6IDk1JTtcclxuICAgICAgICBib3R0b206IC0xMjVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MusicPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-music-player',
                templateUrl: './music-player.component.html',
                styleUrls: ['./music-player.component.scss']
            }]
    }], function () { return [{ type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _services_playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"] }]; }, null); })();


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
    { path: 'profile/:user', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"] },
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
        return this._http.post(this.url + 'login', loginObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
    register(registerObj) {
        return this._http.post(this.url + 'register', registerObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(this.extractData));
    }
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
/* harmony import */ var _shared_registerObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/registerObject */ "MJl6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
















const _c0 = ["submitUserError"];
function HeaderComponent_nav_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "profile/" + option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r14, " ");
} }
function HeaderComponent_nav_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function HeaderComponent_nav_6_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.searchUsers(_r11.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_nav_6_div_7_Template, 4, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r0.searchControl)("matAutocomplete", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx_r0.filteredOptions));
} }
function HeaderComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.popUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_10_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.profile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_10_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_h3_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sing In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_div_17_Template_div_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.submitLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_17_Template_input__ngModel__3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.name; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_17_Template_input__ngModel__5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.username; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_17_Template_input__ngModel__7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.email; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_17_Template_input__ngModel__9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.password; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.registerForm);
} }
function HeaderComponent_h3_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HeaderComponent_div_19_Template_div_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.submitLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_19_Template_input__ngModel__3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.email; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("[ngModel]", function HeaderComponent_div_19_Template_input__ngModel__5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.password; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.loginForm);
} }
function HeaderComponent_a_20_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_20_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.toggleRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.toggleRegister(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.submitLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.submitLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        // searchGroup: FormGroup;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.options = [];
        this.uploadSongForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            autor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            song: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
        this.logged = false;
        this.currentSession = this.storageService.getCurrentSession();
        if (this.currentSession)
            this.logged = true;
        this.register = false;
        this.errorr = false;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
        });
        // this.searchGroup = this.formBuilder.group({
        //   buscador:['',  Validators.required],
        // });
    }
    searchUsers(target) {
        if (target == "") {
            this.options = [];
            this.updateOptions();
            return;
        }
        this.storageService.getOtherUsers(target).subscribe(res => {
            let data = res;
            let users = data.usersSearched.map(user => {
                return user.username;
            });
            this.options = users;
            this.updateOptions();
        }, error => {
            this.options = [];
        });
    }
    updateOptions() {
        this.filteredOptions = this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
    submitLogin() {
        this.error = null;
        if (this.loginForm.valid) {
            this.authenticationService.login(new _shared_loginObject__WEBPACK_IMPORTED_MODULE_3__["LoginObject"](this.loginForm.value)).subscribe(data => this.correctLogin(data), error => this.error = JSON.parse(error._body));
            this.loginForm.reset();
        }
        if (this.registerForm.valid) {
            this.authenticationService.register(new _shared_registerObject__WEBPACK_IMPORTED_MODULE_4__["RegisterObject"](this.registerForm.value)).subscribe(data => this.correctRegister(data), error => this.error = JSON.parse(error._body));
            this.registerForm.reset();
        }
    }
    correctLogin(data) {
        console.log(data);
        this.submitted = true;
        this.logged = true;
        this.storageService.setCurrentSession(data);
        this.closePopup();
        this.profile();
    }
    correctRegister(data) {
        console.log(data);
        this.storageService.setCurrentSession(data);
        this.closePopup();
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
        overlay.classList.add('active');
        popup.classList.add('active');
        // btnOpenPopup.addEventListener('click', function(){
        //   overlay.classList.add('active');
        //   popup.classList.add('active');
        // });
        btnClosePopup.addEventListener('click', function (e) {
            e.preventDefault();
            overlay.classList.remove('active');
            popup.classList.remove('active');
        });
        this.register = false;
    }
    closePopup() {
        var overlay = document.getElementById('overlay').classList.remove('active');
        var popup = document.getElementById('popup').classList.remove('active');
    }
    logout() {
        this.logged = false;
        this.options = [];
        this.updateOptions();
        this.currentSession = this.storageService.logout();
    }
    profile() {
        this.router.navigate(['/profile']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.submitUserError = _t.first);
    } }, decls: 24, vars: 12, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "px-3"], ["routerLink", "/home", "href", "#", 1, "navbar-brand", "logo"], ["src", "../../assets/img/rymLive logo.png", "alt", "rymLiveLogo"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], ["class", "ml-auto navbar-nav", 4, "ngIf"], [1, "navbar-nav", "ml-auto"], [1, "navbar-nav"], ["class", "navbar-brand btn-open-popup", 3, "click", 4, "ngIf"], ["class", "nav-item dropdown dropstart", 4, "ngIf"], ["id", "overlay", 1, "overlay"], ["id", "popup", 1, "popup", 3, "formGroup"], ["id", "btn-close-popup", 1, "btn-close-popup"], ["src", "../../assets/img/close-24px.svg", "alt", ""], [4, "ngIf"], ["role", "form", "id", "login-form", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["id", "register", 3, "click", 4, "ngIf"], ["id", "submitButton", "type", "submit", "class", "btn btn-dark", "form", "login-form", 3, "click", 4, "ngIf"], ["id", "submitButton", "type", "submit", "class", "btn btn-dark", "form", "login-form", "style", "margin-left: -80px;", 3, "click", 4, "ngIf"], [1, "ml-auto", "navbar-nav"], [1, "container-fluid"], [1, "d-flex"], ["id", "searchBar", "type", "search", "placeholder", "Search", "aria-label", "Search", "matInput", "", 1, "form-control", "me-2", "bg-light", 3, "formControl", "matAutocomplete", "keyup"], ["buscador", ""], ["auto", "matAutocomplete"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [3, "value"], [1, "navbar-brand", "btn-open-popup", 3, "click"], [1, "nav-item", "dropdown", "dropstart"], ["href", "#", "id", "navbarDropdownMenuLink", "role", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["src", "../../assets/img/person-24px.svg", "alt", "", 1, "svgImage"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu"], [1, "dropdown-item", 3, "click"], ["role", "form", "id", "login-form", "novalidate", "", 3, "formGroup", "ngSubmit"], ["lForm", "ngForm"], [1, "container-inputs"], ["formControlName", "name", "type", "text", "id", "name", "name", "name", "value", "", "placeholder", "Name", 3, "[ngModel]"], ["formControlName", "username", "type", "text", "id", "user", "name", "user", "value", "", "placeholder", "Username", 3, "[ngModel]"], ["formControlName", "email", "type", "text", "id", "email", "name", "email", "value", "", "placeholder", "Email", 3, "[ngModel]"], ["formControlName", "password", "type", "password", "id", "password", "name", "password", "placeholder", "Password", 3, "[ngModel]"], ["formControlName", "email", "type", "text", "id", "email", "name", "email", "placeholder", "Email", 3, "[ngModel]"], ["id", "register", 3, "click"], ["id", "submitButton", "type", "submit", "form", "login-form", 1, "btn", "btn-dark", 3, "click"], ["id", "submitButton", "type", "submit", "form", "login-form", 1, "btn", "btn-dark", 2, "margin-left", "-80px", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_nav_6_Template, 9, 5, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HeaderComponent_a_9_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 10, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_h3_15_Template, 2, 0, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_div_17_Template, 11, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_h3_18_Template, 2, 0, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_div_19_Template, 7, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, HeaderComponent_a_20_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HeaderComponent_a_21_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_button_22_Template, 2, 0, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_button_23_Template, 2, 0, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.logged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.logged);
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
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  margin: 0;\n}\n\n.header-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background-color: #616161;\n  width: 100%;\n}\n\n.logo[_ngcontent-%COMP%], .header-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: left;\n  color: #fff;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px;\n  line-height: 25px;\n  border-radius: 4px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin-left: 32px;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\n.header-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header-right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .header-right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #282828;\n  color: #fff;\n  cursor: pointer;\n}\n\n.header-left[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20px;\n  float: left;\n  margin-left: 32px;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  position: relative;\n  top: 20px;\n  float: right;\n  margin-right: 32px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.3);\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  visibility: hidden;\n  z-index: 1;\n}\n\n.overlay.active[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.popup[_ngcontent-%COMP%] {\n  background: #F8F8F8;\n  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);\n  border-radius: 3px;\n  font-family: \"Montserrat\", sans-serif;\n  padding: 20px;\n  text-align: center;\n  width: 600px;\n  transition: 0.3s ease all;\n  transform: scale(0.7);\n  opacity: 0;\n}\n\n.popup[_ngcontent-%COMP%]   .btn-close-popup[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 16px;\n  display: block;\n  cursor: pointer;\n  text-align: right;\n  transition: 0.3s ease all;\n  color: #BBBBBB;\n}\n\n.popup[_ngcontent-%COMP%]   .btn-close-popup[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n\n.popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  opacity: 0;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  height: 52px;\n  font-size: 18px;\n  line-height: 52px;\n  border: 1px solid #BBBBBB;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%] {\n  padding-left: 16px;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  height: 40px;\n  line-height: 40px;\n  border: none;\n  color: #fff;\n  background: #07090f;\n  border-radius: 3px;\n  font-family: \"Montserrat\", sans-serif;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.3s ease all;\n}\n\n.popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]:hover {\n  background: rgba(50, 51, 53, 0.9);\n}\n\n\n\n\n\n\n\n.popup.active[_ngcontent-%COMP%] {\n  transform: scale(1);\n  opacity: 1;\n}\n\n.popup.active[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  animation: entradaTitulo 0.8s ease 0.5s forwards;\n}\n\n.popup.active[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  animation: entradaSubtitulo 0.8s ease 0.5s forwards;\n}\n\n.popup.active[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%] {\n  animation: entradaInputs 1s linear 1s forwards;\n}\n\n@keyframes entradaTitulo {\n  from {\n    opacity: 0;\n    transform: translateY(-25px);\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes entradaSubtitulo {\n  from {\n    opacity: 0;\n    transform: translateY(25px);\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n@keyframes entradaInputs {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n#submitButton[_ngcontent-%COMP%] {\n  margin-left: -50px;\n}\n\n#register[_ngcontent-%COMP%] {\n  float: left;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n#browser[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.browserSpan[_ngcontent-%COMP%] {\n  font-size: large !important;\n}\n\nngbd-alert-selfclosing[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  right: 8px;\n  top: 100px;\n}\n\n.logout-menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10px;\n  float: right;\n  margin-right: 32px;\n  cursor: pointer;\n}\n\n.logout-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .logout-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .logout-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #282828;\n  color: #fff;\n  cursor: pointer;\n}\n\n.profile-menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: 10px;\n  float: right;\n  margin-right: 16px;\n  cursor: pointer;\n}\n\n.profile-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .profile-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .profile-menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #282828;\n  color: #fff;\n  cursor: pointer;\n}\n\n.input-group.md-form.form-sm.form-1[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #bdbdbd;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n.svgImage[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 50%;\n  height: 40px;\n}\n\n#searchBar[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\n#searchBar[_ngcontent-%COMP%]:focus, #searchBar[_ngcontent-%COMP%]:hover {\n  border: 3px solid #343a40;\n  border-radius: 0%;\n}\n\n@media screen and (max-width: 800px) {\n  #browser[_ngcontent-%COMP%] {\n    font-size: small;\n  }\n\n  .browserSpan[_ngcontent-%COMP%] {\n    font-size: small !important;\n  }\n\n  .header-right[_ngcontent-%COMP%] {\n    margin-right: 16px;\n  }\n\n  .header-left[_ngcontent-%COMP%] {\n    margin-left: 16px;\n  }\n\n  .logo[_ngcontent-%COMP%] {\n    margin-left: 16px;\n  }\n\n  .popup[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n\n  #register[_ngcontent-%COMP%] {\n    font-size: x-small;\n  }\n\n  .popup[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .container-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 30px;\n    margin-bottom: 15px;\n  }\n\n  .popup[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFESjs7QUFJQTtFQUNJLG1CQUFBO0FBREo7O0FBSUE7RUFDSSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBRko7O0FBS0E7RUFDSSxVQUFBO0FBRko7O0FBS0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRko7O0FBS0E7RUFDSSxpQ0FBQTtBQUZKOztBQUtBLDhCQUFBOztBQUNBLGdCQUFBOztBQUNBLDhCQUFBOztBQUNBO0VBQWdCLG1CQUFBO0VBQXFCLFVBQUE7QUFBckM7O0FBQ0E7RUFBbUIsZ0RBQUE7QUFHbkI7O0FBRkE7RUFBbUIsbURBQUE7QUFNbkI7O0FBTEE7RUFBa0MsOENBQUE7QUFTbEM7O0FBUEE7RUFDSTtJQUNJLFVBQUE7SUFDQSw0QkFBQTtFQVVOO0VBUEU7SUFDSSx3QkFBQTtJQUNBLFVBQUE7RUFTTjtBQUNGOztBQU5BO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsMkJBQUE7RUFRTjtFQUxFO0lBQ0ksd0JBQUE7SUFDQSxVQUFBO0VBT047QUFDRjs7QUFKQTtFQUNJO0lBQU8sVUFBQTtFQU9UO0VBTkU7SUFBSyxVQUFBO0VBU1A7QUFDRjs7QUFQQTtFQUNJLGtCQUFBO0FBU0o7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBU0o7O0FBTkE7RUFDSSxnQkFBQTtBQVNKOztBQU5BO0VBQ0ksMkJBQUE7QUFTSjs7QUFQQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBVUo7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUEE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUEE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBVUo7O0FBUEE7RUFDSSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7QUFVSjs7QUFSQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBV0o7O0FBUkE7RUFDSSxlQUFBO0FBV0o7O0FBUkE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FBV0o7O0FBUkE7RUFDSTtJQUNJLGdCQUFBO0VBV047O0VBVEU7SUFDSSwyQkFBQTtFQVlOOztFQVZFO0lBQ0ksa0JBQUE7RUFhTjs7RUFYRTtJQUNJLGlCQUFBO0VBY047O0VBWkU7SUFDSSxpQkFBQTtFQWVOOztFQWJFO0lBQ0ksWUFBQTtFQWdCTjs7RUFkRTtJQUNJLGtCQUFBO0VBaUJOOztFQWZFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtFQWtCTjs7RUFoQkU7SUFDSSxlQUFBO0lBQ0Esa0JBQUE7RUFtQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dvLCAuaGVhZGVyLWNvbnRhaW5lciBzcGFue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7IFxyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG59XHJcblxyXG4ubG9nbyBpbWd7XHJcbiAgICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmhlYWRlci1sZWZ0IGE6aG92ZXIsIC5oZWFkZXItcmlnaHQgYTpob3ZlciwgLmhlYWRlci1yaWdodCBzcGFuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaGVhZGVyLWxlZnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbn1cclxuXHJcbi5oZWFkZXItcmlnaHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuMyk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLm92ZXJsYXkuYWN0aXZlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5wb3B1cCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgXHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZSBhbGw7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ucG9wdXAgLmJ0bi1jbG9zZS1wb3B1cCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3MgZWFzZSBhbGw7XHJcbiAgICBjb2xvcjogI0JCQkJCQjtcclxufVxyXG5cclxuLnBvcHVwIC5idG4tY2xvc2UtcG9wdXA6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5wb3B1cCBoMyB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5wb3B1cCBkaXYgLmNvbnRhaW5lci1pbnB1dHMge1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnBvcHVwIGRpdiAuY29udGFpbmVyLWlucHV0cyBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNCQkJCQkI7XHJcbn1cclxuXHJcbi5wb3B1cCBkaXYgLmNvbnRhaW5lci1pbnB1dHMgaW5wdXRbdHlwZT10ZXh0XSwgIGlucHV0W3R5cGU9cGFzc3dvcmRde1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4ucG9wdXAgZGl2IC5idG4tc3VibWl0IHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDcwOTBmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IC4zcyBlYXNlIGFsbDtcclxufVxyXG5cclxuLnBvcHVwIGRpdiAuYnRuLXN1Ym1pdDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUwLCA1MSwgNTMsIDAuOSk7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuLyogQU5JTUFDSU9ORVMgKi9cclxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4ucG9wdXAuYWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgb3BhY2l0eTogMTsgfVxyXG4ucG9wdXAuYWN0aXZlIGgzIHsgYW5pbWF0aW9uOiBlbnRyYWRhVGl0dWxvIC44cyBlYXNlIC41cyBmb3J3YXJkczsgfVxyXG4ucG9wdXAuYWN0aXZlIGg0IHsgYW5pbWF0aW9uOiBlbnRyYWRhU3VidGl0dWxvIC44cyBlYXNlIC41cyBmb3J3YXJkczsgfVxyXG4ucG9wdXAuYWN0aXZlIC5jb250YWluZXItaW5wdXRzIHsgYW5pbWF0aW9uOiBlbnRyYWRhSW5wdXRzIDFzIGxpbmVhciAxcyBmb3J3YXJkczsgfVxyXG5cclxuQGtleWZyYW1lcyBlbnRyYWRhVGl0dWxvIHtcclxuICAgIGZyb20ge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZW50cmFkYVN1YnRpdHVsbyB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNXB4KTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZW50cmFkYUlucHV0cyB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgfVxyXG4gICAgdG8geyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbiNzdWJtaXRCdXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogLTUwcHg7XHJcbn1cclxuXHJcbiNyZWdpc3RlcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2Jyb3dzZXJ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uYnJvd3NlclNwYW57XHJcbiAgICBmb250LXNpemU6IGxhcmdlICFpbXBvcnRhbnQ7XHJcbn1cclxubmdiZC1hbGVydC1zZWxmY2xvc2luZyB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDhweDtcclxuICAgIHRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi5sb2dvdXQtbWVudXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxvZ291dC1tZW51IGE6aG92ZXIsIC5sb2dvdXQtbWVudSBhOmhvdmVyLCAubG9nb3V0LW1lbnUgc3Bhbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtbWVudXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtbWVudSBhOmhvdmVyLCAucHJvZmlsZS1tZW51IGE6aG92ZXIsIC5wcm9maWxlLW1lbnUgc3Bhbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLm1kLWZvcm0uZm9ybS1zbS5mb3JtLTEgaW5wdXR7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMC4yNXJlbTtcclxuICB9XHJcbi5zdmdJbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuI3NlYXJjaEJhcntcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxufVxyXG5cclxuI3NlYXJjaEJhcjpmb2N1cywgI3NlYXJjaEJhcjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMzQzYTQwO1xyXG4gICAgYm9yZGVyLXJhZGl1czowJSA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICNicm93c2Vye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICB9XHJcbiAgICAuYnJvd3NlclNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1yaWdodCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1sZWZ0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIH1cclxuICAgIC5sb2dvIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIH1cclxuICAgIC5wb3B1cCB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG4gICAgI3JlZ2lzdGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIH1cclxuICAgIC5wb3B1cCBkaXYgLmNvbnRhaW5lci1pbnB1dHMgaW5wdXQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnBvcHVwIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { submitUserError: [{
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
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token
        });
        return this._http.get(this.url + 'profile', { headers: auth });
    }
    ;
    getOtherUser(username) {
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token
        });
        return this._http.get(this.url + 'profile/user/' + username, { headers: auth });
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
    updateSessionUser() {
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token
        });
        const user = this.currentSession.user;
        console.log("User Actualizado: ", user);
        return this._http.put(this.url + 'profile/update', user, { headers: auth });
    }
    ;
    updateUser(updatedUser) {
        this.currentSession.user = updatedUser;
        this.updateSessionUser().subscribe(data => console.log(data.status), error => console.log(error));
    }
    updateImage(image) {
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token
        });
        return this._http.put(this.url + 'profile/updateImage', image, { headers: auth });
    }
    getCurrentImage() {
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token
        });
        return this._http.get(this.url + 'getImage/' + this.currentSession.user.image, { headers: auth });
    }
    getNameFiles() {
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token
        });
        return this._http.get(this.url + 'getNameFile', { headers: auth });
    }
    getOtherNameFiles(userId) {
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token
        });
        return this._http.get(this.url + 'getNameFile/' + userId, { headers: auth });
    }
    playThisSong(nameFile) {
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token,
        });
        return this._http.get(this.url + 'getSong/' + nameFile, { headers: auth });
    }
    uploadSong(formData) {
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token
        });
        return this._http.post(this.url + 'uploadSong/', formData, { headers: auth });
        // return this._http.post<ResSong>(this.url+'uploadSong/', {file,autor,title}, {headers:auth});
    }
    getSongMostViewed() {
        return this._http.get(this.url + 'popularSong/');
    }
    getOtherUsers(target) {
        const auth = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'auth': 'Bearer ' + this.currentSession.token
        });
        return this._http.get(this.url + '/search/' + target, { headers: auth });
    }
    logout() {
        this.removeCurrentSession();
        this.router.navigate(['/home']);
        console.log(this.currentSession);
    }
    extractData(res) {
        let body = res;
        console.log(body);
        return body;
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

/***/ "tq2C":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 0, vars: 0, template: function SearchComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "q4sD");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var _services_playlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/playlist.service */ "JGdh");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MainComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.songImgDefault, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", song_r1.title, " - ", song_r1.autor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Reproduciones: ", song_r1.views, "");
} }
class MainComponent {
    constructor(storageService, playlistService) {
        this.storageService = storageService;
        this.playlistService = playlistService;
    }
    ngOnInit() {
        this.songImgDefault = "../../assets/img/musical-note.svg";
        this.songsMostViewed = [];
        this.storageService.getSongMostViewed().subscribe(data => {
            console.log(data);
            this.resSong = data;
            console.log(this.resSong);
            this.songsMostViewed = this.resSong.song;
            this.updatePlaylist();
        });
    }
    updatePlaylist() {
        this.playlistService.setPlaylist(this.songsMostViewed);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 5, vars: 1, consts: [[1, "main"], [1, "title"], [1, "container"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [3, "src"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Las canciones mas escuchadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MainComponent_div_4_Template, 7, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songsMostViewed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".main[_ngcontent-%COMP%] {\n  background-color: #dcdde1;\n  right: 0px;\n  left: 0px;\n  width: 100%;\n  height: 90%;\n  margin-top: -6px;\n  text-align: center;\n  overflow: hidden;\n}\n\ndiv[_ngcontent-%COMP%] {\n  top: 100px;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  font-family: sans-serif;\n  letter-spacing: 0.03em;\n  line-height: 1.6;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 40px;\n  padding-top: 50px;\n  color: #6a6a6a;\n  font-weight: 100;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1200px;\n  height: 430px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: auto;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  width: 330px;\n  height: 430px;\n  border-radius: 8px;\n  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  margin: 20px;\n  text-align: center;\n  transition: all 0.25s;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-15px);\n  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 220px;\n  margin: 20px auto 20px auto;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 20px;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 500;\n  text-decoration: none;\n  color: #3498db;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFFQSxVQUFBO0VBQ0EsU0FBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUE7RUFDSSxVQUFBO0FBSEo7O0FBTUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQUhKOztBQU1BO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQUhKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBSko7O0FBT0E7RUFDSSw0QkFBQTtFQUNBLDBDQUFBO0FBSko7O0FBT0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBSko7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFMSjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBTEoiLCJmaWxlIjoic3JjL2FwcC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2RkZTE7O1xyXG4gICBcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcblxyXG4gICAgbWFyZ2luLXRvcDogLTZweDtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICB0b3A6IDEwMHB4O1xyXG59XHJcblxyXG5odG1sLCBib2R5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogIzZhNmE2YTtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmR7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQ6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5jYXJkIGltZ3tcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0byAyMHB4IGF1dG87XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIC5jYXJkIGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQgcHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmNhcmQgYSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICMzNDk4ZGI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }, { type: _services_playlist_service__WEBPACK_IMPORTED_MODULE_3__["PlaylistService"] }]; }, null); })();


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