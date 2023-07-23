"use strict";(self.webpackChunkfront=self.webpackChunkfront||[]).push([[65],{65:(sr,Ae,a)=>{a.r(Ae),a.d(Ae,{StockModule:()=>or});var F=a(4743),o=a(3492),Pt=a(2541),Me=a(3532),Bt=a(7579),be=a(6456),Tt=a(7733),De=a(4428),It=a(5410),kt=a(7762),Rt=a(5375);let Oe=(()=>{class n{constructor(e,r){this._renderer=e,this._elementRef=r,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(e,r){this._renderer.setProperty(this._elementRef.nativeElement,e,r)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq))},n.\u0275dir=o.lG2({type:n}),n})(),_=(()=>{class n extends Oe{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,features:[o.qOj]}),n})();const h=new o.OlP("NgValueAccessor"),jt={provide:h,useExisting:(0,o.Gpc)(()=>P),multi:!0},Lt=new o.OlP("CompositionEventMode");let P=(()=>{class n extends Oe{constructor(e,r,i){super(e,r),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function qt(){const n=(0,F.q)()?(0,F.q)().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}())}writeValue(e){this.setProperty("value",e??"")}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(o.Qsj),o.Y36(o.SBq),o.Y36(Lt,8))},n.\u0275dir=o.lG2({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},features:[o._Bn([jt]),o.qOj]}),n})();function p(n){return null==n||("string"==typeof n||Array.isArray(n))&&0===n.length}function Ee(n){return null!=n&&"number"==typeof n.length}const u=new o.OlP("NgValidators"),g=new o.OlP("NgAsyncValidators"),Zt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class B{static min(t){return function we(n){return t=>{if(p(t.value)||p(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e<n?{min:{min:n,actual:t.value}}:null}}(t)}static max(t){return function Se(n){return t=>{if(p(t.value)||p(n))return null;const e=parseFloat(t.value);return!isNaN(e)&&e>n?{max:{max:n,actual:t.value}}:null}}(t)}static required(t){return function Ne(n){return p(n.value)?{required:!0}:null}(t)}static requiredTrue(t){return function Ge(n){return!0===n.value?null:{required:!0}}(t)}static email(t){return function xe(n){return p(n.value)||Zt.test(n.value)?null:{email:!0}}(t)}static minLength(t){return function Pe(n){return t=>p(t.value)||!Ee(t.value)?null:t.value.length<n?{minlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function Be(n){return t=>Ee(t.value)&&t.value.length>n?{maxlength:{requiredLength:n,actualLength:t.value.length}}:null}(t)}static pattern(t){return function Te(n){if(!n)return T;let t,e;return"string"==typeof n?(e="","^"!==n.charAt(0)&&(e+="^"),e+=n,"$"!==n.charAt(n.length-1)&&(e+="$"),t=new RegExp(e)):(e=n.toString(),t=n),r=>{if(p(r.value))return null;const i=r.value;return t.test(i)?null:{pattern:{requiredPattern:e,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return je(t)}static composeAsync(t){return qe(t)}}function T(n){return null}function Ie(n){return null!=n}function ke(n){return(0,o.QGY)(n)?(0,Pt.D)(n):n}function Ue(n){let t={};return n.forEach(e=>{t=null!=e?{...t,...e}:t}),0===Object.keys(t).length?null:t}function Re(n,t){return t.map(e=>e(n))}function He(n){return n.map(t=>function Yt(n){return!n.validate}(t)?t:e=>t.validate(e))}function je(n){if(!n)return null;const t=n.filter(Ie);return 0==t.length?null:function(e){return Ue(Re(e,t))}}function X(n){return null!=n?je(He(n)):null}function qe(n){if(!n)return null;const t=n.filter(Ie);return 0==t.length?null:function(e){return function Ut(...n){const t=(0,Tt.jO)(n),{args:e,keys:r}=(0,Bt.D)(n),i=new Me.y(s=>{const{length:l}=e;if(!l)return void s.complete();const d=new Array(l);let V=l,O=l;for(let Q=0;Q<l;Q++){let Ve=!1;(0,be.Xf)(e[Q]).subscribe((0,De.x)(s,ir=>{Ve||(Ve=!0,O--),d[Q]=ir},()=>V--,void 0,()=>{(!V||!Ve)&&(O||s.next(r?(0,kt.n)(r,d):d),s.complete())}))}});return t?i.pipe((0,It.Z)(t)):i}(Re(e,t).map(ke)).pipe((0,Rt.U)(Ue))}}function K(n){return null!=n?qe(He(n)):null}function Le(n,t){return null===n?[t]:Array.isArray(n)?[...n,t]:[n,t]}function Ze(n){return n._rawValidators}function Ye(n){return n._rawAsyncValidators}function ee(n){return n?Array.isArray(n)?n:[n]:[]}function I(n,t){return Array.isArray(n)?n.includes(t):n===t}function $e(n,t){const e=ee(t);return ee(n).forEach(i=>{I(e,i)||e.push(i)}),e}function We(n,t){return ee(t).filter(e=>!I(n,e))}class ze{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=X(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=K(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}class c extends ze{get formDirective(){return null}get path(){return null}}class m extends ze{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Je{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let Qe=(()=>{class n extends Je{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(m,2))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[o.qOj]}),n})(),Xe=(()=>{class n extends Je{constructor(e){super(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(c,10))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(e,r){2&e&&o.ekj("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[o.qOj]}),n})();const E="VALID",U="INVALID",A="PENDING",w="DISABLED";function re(n){return(R(n)?n.validators:n)||null}function oe(n,t){return(R(t)?t.asyncValidators:n)||null}function R(n){return null!=n&&!Array.isArray(n)&&"object"==typeof n}class nt{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===U}get pending(){return this.status==A}get disabled(){return this.status===w}get enabled(){return this.status!==w}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators($e(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators($e(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(We(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(We(t,this._rawAsyncValidators))}hasValidator(t){return I(this._rawValidators,t)}hasAsyncValidator(t){return I(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=A,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=w,this.errors=null,this._forEachChild(r=>{r.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=E,this._forEachChild(r=>{r.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:e}),this._onDisabledChange.forEach(r=>r(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===A)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?w:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;const e=ke(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(r=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(r,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){let e=t;return null==e||(Array.isArray(e)||(e=e.split(".")),0===e.length)?null:e.reduce((r,i)=>r&&r._find(i),this)}getError(t,e){const r=e?this.get(e):this;return r&&r.errors?r.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new o.vpe,this.statusChanges=new o.vpe}_calculateStatus(){return this._allControlsDisabled()?w:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(U)?U:E}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){R(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Jt(n){return Array.isArray(n)?X(n):n||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function Qt(n){return Array.isArray(n)?K(n):n||null}(this._rawAsyncValidators)}}class H extends nt{constructor(t,e,r){super(re(e),oe(r,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,r={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){(function tt(n,t,e){n._forEachChild((r,i)=>{if(void 0===e[i])throw new o.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(r=>{(function et(n,t,e){const r=n.controls;if(!(t?Object.keys(r):r).length)throw new o.vHH(1e3,"");if(!r[e])throw new o.vHH(1001,"")})(this,!0,r),this.controls[r].setValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(r=>{const i=this.controls[r];i&&i.patchValue(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((r,i)=>{r.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,r)=>(t[r]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,r)=>!!r._syncPendingControls()||e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const r=this.controls[e];r&&t(r,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[e,r]of Object.entries(this.controls))if(this.contains(e)&&t(r))return!0;return!1}_reduceValue(){return this._reduceChildren({},(e,r,i)=>((r.enabled||this.disabled)&&(e[i]=r.value),e))}_reduceChildren(t,e){let r=t;return this._forEachChild((i,s)=>{r=e(r,i,s)}),r}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}const M=new o.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>j}),j="always";function S(n,t,e=j){ie(n,t),t.valueAccessor.writeValue(n.value),(n.disabled||"always"===e)&&t.valueAccessor.setDisabledState?.(n.disabled),function en(n,t){t.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,"change"===n.updateOn&&rt(n,t)})}(n,t),function nn(n,t){const e=(r,i)=>{t.valueAccessor.writeValue(r),i&&t.viewToModelUpdate(r)};n.registerOnChange(e),t._registerOnDestroy(()=>{n._unregisterOnChange(e)})}(n,t),function tn(n,t){t.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,"blur"===n.updateOn&&n._pendingChange&&rt(n,t),"submit"!==n.updateOn&&n.markAsTouched()})}(n,t),function Kt(n,t){if(t.valueAccessor.setDisabledState){const e=r=>{t.valueAccessor.setDisabledState(r)};n.registerOnDisabledChange(e),t._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}(n,t)}function L(n,t,e=!0){const r=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(r),t.valueAccessor.registerOnTouched(r)),Y(n,t),n&&(t._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Z(n,t){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ie(n,t){const e=Ze(n);null!==t.validator?n.setValidators(Le(e,t.validator)):"function"==typeof e&&n.setValidators([e]);const r=Ye(n);null!==t.asyncValidator?n.setAsyncValidators(Le(r,t.asyncValidator)):"function"==typeof r&&n.setAsyncValidators([r]);const i=()=>n.updateValueAndValidity();Z(t._rawValidators,i),Z(t._rawAsyncValidators,i)}function Y(n,t){let e=!1;if(null!==n){if(null!==t.validator){const i=Ze(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(l=>l!==t.validator);s.length!==i.length&&(e=!0,n.setValidators(s))}}if(null!==t.asyncValidator){const i=Ye(n);if(Array.isArray(i)&&i.length>0){const s=i.filter(l=>l!==t.asyncValidator);s.length!==i.length&&(e=!0,n.setAsyncValidators(s))}}}const r=()=>{};return Z(t._rawValidators,r),Z(t._rawAsyncValidators,r),e}function rt(n,t){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function st(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}function at(n){return"object"==typeof n&&null!==n&&2===Object.keys(n).length&&"value"in n&&"disabled"in n}const G=class extends nt{constructor(t=null,e,r){super(re(e),oe(r,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),R(e)&&(e.nonNullable||e.initialValueIsDefault)&&(this.defaultValue=at(t)?t.value:t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(r=>r(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){st(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){st(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){at(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};let ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275dir=o.lG2({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),n})();const hn={provide:h,useExisting:(0,o.Gpc)(()=>ce),multi:!0};let ce=(()=>{class n extends _{writeValue(e){this.setProperty("value",e??"")}registerOnChange(e){this.onChange=r=>{e(""==r?null:parseFloat(r))}}}return n.\u0275fac=function(){let t;return function(r){return(t||(t=o.n5z(n)))(r||n)}}(),n.\u0275dir=o.lG2({type:n,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(e,r){1&e&&o.NdJ("input",function(s){return r.onChange(s.target.value)})("blur",function(){return r.onTouched()})},features:[o._Bn([hn]),o.qOj]}),n})(),ft=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({}),n})();const de=new o.OlP("NgModelWithFormControlWarning"),_n={provide:c,useExisting:(0,o.Gpc)(()=>$)};let $=(()=>{class n extends c{constructor(e,r,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new o.vpe,this._setValidators(e),this._setAsyncValidators(r)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Y(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){const r=this.form.get(e.path);return S(r,e,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),r}getControl(e){return this.form.get(e.path)}removeControl(e){L(e.control||null,e,!1),function an(n,t){const e=n.indexOf(t);e>-1&&n.splice(e,1)}(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,r){this.form.get(e.path).setValue(r)}onSubmit(e){return this.submitted=!0,function it(n,t){n._syncPendingControls(),t.forEach(e=>{const r=e.control;"submit"===r.updateOn&&r._pendingChange&&(e.viewToModelUpdate(r._pendingValue),r._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(e),"dialog"===e?.target?.method}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{const r=e.control,i=this.form.get(e.path);r!==i&&(L(r||null,e),(n=>n instanceof G)(i)&&(S(i,e,this.callSetDisabledState),e.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){const r=this.form.get(e.path);(function ot(n,t){ie(n,t)})(r,e),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){const r=this.form.get(e.path);r&&function rn(n,t){return Y(n,t)}(r,e)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ie(this.form,this),this._oldForm&&Y(this._oldForm,this)}_checkFormPresent(){}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(u,10),o.Y36(g,10),o.Y36(M,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formGroup",""]],hostBindings:function(e,r){1&e&&o.NdJ("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[o._Bn([_n]),o.qOj,o.TTD]}),n})();const Cn={provide:m,useExisting:(0,o.Gpc)(()=>pe)};let pe=(()=>{class n extends m{set isDisabled(e){}constructor(e,r,i,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new o.vpe,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(r),this._setAsyncValidators(i),this.valueAccessor=function le(n,t){if(!t)return null;let e,r,i;return Array.isArray(t),t.forEach(s=>{s.constructor===P?e=s:function sn(n){return Object.getPrototypeOf(n.constructor)===_}(s)?r=s:i=s}),i||r||e||null}(0,s)}ngOnChanges(e){this._added||this._setUpControl(),function ae(n,t){if(!n.hasOwnProperty("model"))return!1;const e=n.model;return!!e.isFirstChange()||!Object.is(t,e.currentValue)}(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return function q(n,t){return[...t.path,n]}(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return n._ngModelWarningSentOnce=!1,n.\u0275fac=function(e){return new(e||n)(o.Y36(c,13),o.Y36(u,10),o.Y36(g,10),o.Y36(h,10),o.Y36(de,8))},n.\u0275dir=o.lG2({type:n,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[o._Bn([Cn]),o.qOj,o.TTD]}),n})(),Bn=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[ft]}),n})(),In=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:de,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:M,useValue:e.callSetDisabledState??j}]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[Bn]}),n})();var ye=a(6668),W=a(630),b=a(3740),f=a(3275),v=a(6233),kn=a(4275);class Un extends kn.w0{constructor(t,e){super()}schedule(t,e=0){return this}}const z={setInterval(n,t,...e){const{delegate:r}=z;return r?.setInterval?r.setInterval(n,t,...e):setInterval(n,t,...e)},clearInterval(n){const{delegate:t}=z;return(t?.clearInterval||clearInterval)(n)},delegate:void 0};var Rn=a(9627);const wt={now:()=>(wt.delegate||Date).now(),delegate:void 0};class x{constructor(t,e=x.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,r){return new this.schedulerActionCtor(this,t).schedule(r,e)}}x.now=wt.now;const St=new class jn extends x{constructor(t,e=x.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let r;this._active=!0;do{if(r=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,r){for(;t=e.shift();)t.unsubscribe();throw r}}}(class Hn extends Un{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var r;if(this.closed)return this;this.state=t;const i=this.id,s=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(s,i,e)),this.pending=!0,this.delay=e,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(s,this.id,e),this}requestAsyncId(t,e,r=0){return z.setInterval(t.flush.bind(t,this),r)}recycleAsyncId(t,e,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return e;null!=e&&z.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(t,e);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let i,r=!1;try{this.work(t)}catch(s){r=!0,i=s||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:r}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,Rn.P)(r,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}}),qn=St;var Ln=a(9877),Nt=a(9506),Zn=a(7847),Yn=a(2967),Wn=a(435),zn=a(3007);function Gt(n,t){return t?e=>(0,Ln.z)(t.pipe((0,Nt.q)(1),function $n(){return(0,Zn.e)((n,t)=>{n.subscribe((0,De.x)(t,Yn.Z))})}()),e.pipe(Gt(n))):(0,zn.z)((e,r)=>(0,be.Xf)(n(e,r)).pipe((0,Nt.q)(1),(0,Wn.h)(e)))}var Jn=a(408);function J(n,t=St){const e=function Xn(n=0,t,e=qn){let r=-1;return null!=t&&((0,Jn.K)(t)?e=t:r=t),new Me.y(i=>{let s=function Qn(n){return n instanceof Date&&!isNaN(n)}(n)?+n-e.now():n;s<0&&(s=0);let l=0;return e.schedule(function(){i.closed||(i.next(l++),0<=r?this.schedule(void 0,r):i.complete())},s)})}(n,t);return Gt(()=>e)}var C=a(5265),ve=a(9957),Ce=a(1812),Kn=a(7376);let D=[{id:"a1",name:"Tournevis",price:2.99,qty:123},{id:"a2",name:"Pelle",price:1.5,qty:14}],xt=(()=>{class n{constructor(){this.articles$=new Kn.X(void 0)}add(e){return(0,f.of)(void 0).pipe((0,v.b)(()=>{const r={...e,id:crypto.randomUUID()};D.push(r),this.articles$.next(D)}))}refresh(){return(0,f.of)(void 0).pipe((0,v.b)(()=>{this.articles$.next(D)}))}remove(e){return(0,f.of)(void 0).pipe((0,v.b)(()=>{D=D.filter(r=>!e.includes(r.id)),this.articles$.next(D)}))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),er=(()=>{class n{constructor(e,r){this.articleService=e,this.router=r,this.errorMsg="",this.f=new H({name:new G("Truc",[B.required,B.maxLength(10)]),price:new G(0,[B.required]),qty:new G(0,[B.required])}),this.faPlus=b.r8p,this.faCircleNotch=b.IJ7,this.isAdding=!1}submit(){console.log("submit");const e=this.f.value;(0,f.of)(void 0).pipe((0,v.b)(()=>{this.isAdding=!0,this.errorMsg=""}),J(300),(0,C.w)(()=>this.articleService.add(e)),(0,C.w)(()=>this.articleService.refresh()),(0,C.w)(()=>this.router.navigateByUrl("/stock")),(0,ve.K)(r=>(console.log("err: ",r),this.errorMsg="Erreur Technique",(0,f.of)(void 0))),(0,Ce.x)(()=>{this.isAdding=!1})).subscribe()}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(xt),o.Y36(W.F0))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-add"]],decls:22,vars:5,consts:[[3,"formGroup","ngSubmit"],["type","text","formControlName","name","placeholder","Ex: Tournevis"],["type","number","formControlName","price"],["type","number","formControlName","qty"],[1,"error"],["type","submit",1,"primary",3,"disabled"],[3,"icon","spin"]],template:function(e,r){1&e&&(o.TgZ(0,"main")(1,"h1"),o._uU(2,"Ajout d'un article"),o.qZA(),o.TgZ(3,"form",0),o.NdJ("ngSubmit",function(){return r.submit()}),o.TgZ(4,"label")(5,"span"),o._uU(6,"Nom"),o.qZA(),o._UZ(7,"input",1),o.qZA(),o.TgZ(8,"label")(9,"span"),o._uU(10,"Prix"),o.qZA(),o._UZ(11,"input",2),o.qZA(),o.TgZ(12,"label")(13,"span"),o._uU(14,"Quantit\xe9"),o.qZA(),o._UZ(15,"input",3),o.qZA(),o.TgZ(16,"div",4),o._uU(17),o.qZA(),o.TgZ(18,"button",5),o._UZ(19,"fa-icon",6),o.TgZ(20,"span"),o._uU(21,"Ajouter"),o.qZA()()()()),2&e&&(o.xp6(3),o.Q6J("formGroup",r.f),o.xp6(14),o.hij(" ",r.errorMsg," "),o.xp6(1),o.Q6J("disabled",r.f.invalid||r.isAdding),o.xp6(1),o.Q6J("icon",r.isAdding?r.faCircleNotch:r.faPlus)("spin",r.isAdding))},dependencies:[ye.BN,ht,P,ce,Qe,Xe,$,pe],styles:["form[_ngcontent-%COMP%]{display:flex;flex-flow:column;gap:.5em;width:100%;max-width:25em}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;flex-flow:column}form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:.1em solid #aaa;border-radius:.3em;padding:.5em 1em}form[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{height:3em;display:flex;align-items:center;justify-content:center;font-weight:700}"]}),n})();function tr(n,t){if(1&n){const e=o.EpF();o.TgZ(0,"tr",14),o.NdJ("click",function(){const s=o.CHM(e).$implicit,l=o.oxw();return o.KtG(l.select(s))}),o.TgZ(1,"td",7),o._uU(2),o.qZA(),o.TgZ(3,"td",8),o._uU(4),o.qZA(),o.TgZ(5,"td",9),o._uU(6),o.qZA()()}if(2&n){const e=t.$implicit,r=o.oxw();o.ekj("selected",r.selectedArticles.has(e)),o.xp6(2),o.Oqu(e.name),o.xp6(2),o.hij("",e.price," \u20ac"),o.xp6(2),o.Oqu(e.qty)}}const nr=[{path:"",component:(()=>{class n{constructor(e){this.articleService=e,this.errorMsg="",this.faCircleNotch=b.IJ7,this.faPlus=b.r8p,this.faRotateRight=b.mHK,this.faTrashCan=b.Vui,this.isRemoving=!1,this.isRefreshing=!1,this.selectedArticles=new Set}ngOnInit(){void 0===this.articleService.articles$.value&&(0,f.of)(void 0).pipe(J(300),(0,C.w)(()=>this.articleService.refresh())).subscribe()}getArticleId(e,r){return r.id}refresh(){console.log("refresh"),(0,f.of)(void 0).pipe((0,v.b)(()=>{this.errorMsg="",this.isRefreshing=!0}),J(300),(0,C.w)(()=>this.articleService.refresh()),(0,ve.K)(e=>(console.log("err: ",e),this.errorMsg="Erreur Technique",(0,f.of)(void 0))),(0,Ce.x)(()=>{this.isRefreshing=!1})).subscribe()}remove(){console.log("remove"),(0,f.of)(void 0).pipe((0,v.b)(()=>{this.errorMsg="",this.isRemoving=!0}),J(300),(0,C.w)(()=>{const e=[...this.selectedArticles].map(r=>r.id);return this.articleService.remove(e)}),(0,C.w)(()=>this.articleService.refresh()),(0,v.b)(()=>{this.selectedArticles.clear()}),(0,ve.K)(e=>(console.log("err: ",e),this.errorMsg="Erreur Technique",(0,f.of)(void 0))),(0,Ce.x)(()=>{this.isRemoving=!1})).subscribe()}select(e){this.selectedArticles.has(e)?this.selectedArticles.delete(e):this.selectedArticles.add(e)}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(xt))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-stock"]],decls:32,vars:18,consts:[[1,"content"],["title","Rafra\xeechir",3,"disabled","click"],[3,"icon","spin"],["routerLink","add","title","Ajouter",1,"button"],[3,"icon"],["title","Supprimer",3,"hidden","disabled","click"],[1,"error"],[1,"name"],[1,"price"],[1,"qty"],[3,"hidden"],["colspan","3"],[1,"loading"],[3,"selected","click",4,"ngFor","ngForOf","ngForTrackBy"],[3,"click"]],template:function(e,r){1&e&&(o.TgZ(0,"main")(1,"h1"),o._uU(2,"Liste des articles"),o.qZA(),o.TgZ(3,"div",0)(4,"nav")(5,"button",1),o.NdJ("click",function(){return r.refresh()}),o._UZ(6,"fa-icon",2),o.qZA(),o.TgZ(7,"a",3),o._UZ(8,"fa-icon",4),o.qZA(),o.TgZ(9,"button",5),o.NdJ("click",function(){return r.remove()}),o._UZ(10,"fa-icon",2),o.qZA()(),o.TgZ(11,"div",6),o._uU(12),o.qZA(),o.TgZ(13,"table")(14,"thead")(15,"tr")(16,"th",7),o._uU(17,"Nom"),o.qZA(),o.TgZ(18,"th",8),o._uU(19,"Prix"),o.qZA(),o.TgZ(20,"th",9),o._uU(21,"Quantit\xe9"),o.qZA()()(),o.TgZ(22,"tbody")(23,"tr",10),o.ALo(24,"async"),o.TgZ(25,"td",11)(26,"div",12),o._UZ(27,"fa-icon",2),o.TgZ(28,"span"),o._uU(29,"Chargement..."),o.qZA()()()(),o.YNc(30,tr,7,5,"tr",13),o.ALo(31,"async"),o.qZA()()()()),2&e&&(o.xp6(5),o.Q6J("disabled",r.isRefreshing),o.xp6(1),o.Q6J("icon",r.isRefreshing?r.faCircleNotch:r.faRotateRight)("spin",r.isRefreshing),o.xp6(2),o.Q6J("icon",r.faPlus),o.xp6(1),o.Q6J("hidden",0===r.selectedArticles.size)("disabled",r.isRemoving),o.xp6(1),o.Q6J("icon",r.isRemoving?r.faCircleNotch:r.faTrashCan)("spin",r.isRemoving),o.xp6(2),o.hij(" ",r.errorMsg," "),o.xp6(11),o.Q6J("hidden",void 0!==o.lcZ(24,14,r.articleService.articles$)),o.xp6(4),o.Q6J("icon",r.faCircleNotch)("spin",!0),o.xp6(3),o.Q6J("ngForOf",o.lcZ(31,16,r.articleService.articles$))("ngForTrackBy",r.getArticleId))},dependencies:[F.sg,W.rH,ye.BN,F.Ov],styles:["div.content[_ngcontent-%COMP%]{display:flex;flex-flow:column}div.content[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;gap:.3em}div.content[_ngcontent-%COMP%]   div.error[_ngcontent-%COMP%]{font-weight:700;height:2em;display:flex;align-items:center}div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{border:.1em solid #aaa;border-radius:.3em;border-collapse:separate;border-spacing:0;overflow:hidden}div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.5em 1em}div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{background:#aaa}div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{cursor:pointer}div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background:#eee}div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background:#ddd}div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%]{background:#ccc}div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%], div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%]{text-align:right}div.content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   div.loading[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.5em}"]}),n})()},{path:"add",component:er}];let rr=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[W.Bz.forChild(nr),W.Bz]}),n})(),or=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[F.ez,rr,ye.uH,In]}),n})()}}]);