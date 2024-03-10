<script lang="ts" context="module">
  type T = Record<string, unknown>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>">
	import { markdownEditorWrapper, modeChangeButton, modeChangeButtonWrapper, textareaWrapper } from "./markdownEditor.style"

  // prettier-ignore
	import FormLabel from "$ui/_form/FormLabel/FormLabel.svelte"
	import ErrorMessage from '$ui/_form/ErrorMessage/ErrorMessage.svelte'
	import Markdown from '$ui/Markdown/Markdown.svelte'
	import { fieldStyle } from '$ui/_form//commonStyle'

	import { 
    formFieldProxy, 
    type SuperForm, 
    type FormPathLeaves 
  } from 'sveltekit-superforms';

	// 基本的なhtml属性はrestPropsで受け取るようにする
	export let form: SuperForm<T>
	export let field: FormPathLeaves<T>
	export let label: string
	export let isRequired: boolean = false

	/** 初期行数 */
	export let rows: number = 5
	const { value, errors } = formFieldProxy(form, field)
	const fieldId = `field-id-${$$restProps.id}`
	const errormessageId = `errormessage-${$$restProps.id}`

  // 例外的にasを活用する
  $: md = $value as string
  let isPreview = false

  function toPreview() {
    isPreview = true
  }

  function toMarkdown() {
    isPreview = false
  }

</script>

<div class={markdownEditorWrapper}>
  <FormLabel {fieldId} {label} {isRequired} />
  <div class={modeChangeButtonWrapper}>
    <!-- TODO: 「マークダウン」という言葉伝わるか -->
    <button class={modeChangeButton({isActive: !isPreview})} type="button" on:click={toMarkdown}>マークダウン</button>
    <button class={modeChangeButton({isActive: isPreview})} type="button" on:click={toPreview}>プレビュー</button>
  </div>
    <div class={textareaWrapper({isPreview})}>
      <span class={fieldStyle({ isError: !!$errors })}>
        <textarea
          id={fieldId}
          name={field}
          {rows}
          bind:value={$value}
          aria-invalid={$errors ? 'true' : undefined}
          aria-errormessage={errormessageId}
          {...$$restProps}
        />
      </span>
      {#if $errors}
        <ErrorMessage id={errormessageId}>{$errors}</ErrorMessage>
      {/if}
    </div>
    <Markdown {md} {isPreview} />
</div>


<style>
	textarea {
		width: 100%;
		font-size: 16px;
		border: none;
		outline: none;
	}
</style>
