import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
  Checkbox,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Separator,
  Spinner,
  Switch,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@asif-sirajudeen/eds-ui"
import type { ReactNode } from "react"

const Box = ({ children }: { children: ReactNode }) => (
  <div className="not-prose flex flex-wrap items-center gap-4 rounded-lg border p-6">{children}</div>
)

export const ButtonLoadingExample = () => (
  <Box>
    <Button disabled>
      <Spinner data-icon="inline-start" />
      Saving
    </Button>
  </Box>
)

export const ButtonIconOnlyExample = () => (
  <Box>
    <Button size="icon" variant="outline" aria-label="Add item">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
    </Button>
  </Box>
)

export const InputExample = () => (
  <Box>
    <Input type="email" placeholder="Email" aria-label="Email" className="max-w-xs" />
  </Box>
)

export const TextareaExample = () => (
  <Box>
    <Textarea placeholder="Type your message" aria-label="Message" className="max-w-xs" />
  </Box>
)

export const LabelExample = () => (
  <Box>
    <div className="grid gap-2">
      <Label htmlFor="label-email">Email</Label>
      <Input id="label-email" placeholder="you@example.com" />
    </div>
  </Box>
)

export const SeparatorExample = () => (
  <Box>
    <div className="w-64">
      <p className="text-sm">Above</p>
      <Separator className="my-2" />
      <p className="text-sm">Below</p>
    </div>
  </Box>
)

export const FieldExample = () => (
  <Box>
    <Field className="w-72">
      <FieldLabel htmlFor="field-email">Email</FieldLabel>
      <Input id="field-email" type="email" />
      <FieldDescription>We never share your email.</FieldDescription>
    </Field>
  </Box>
)

export const CheckboxExample = () => (
  <Box>
    <Field orientation="horizontal">
      <Checkbox id="doc-terms" />
      <FieldContent>
        <FieldLabel htmlFor="doc-terms">Accept terms</FieldLabel>
        <FieldDescription>You agree to our terms of service.</FieldDescription>
      </FieldContent>
    </Field>
  </Box>
)

export const RadioGroupExample = () => (
  <Box>
    <RadioGroup defaultValue="a" aria-label="Plan">
      <Field orientation="horizontal">
        <RadioGroupItem value="a" id="doc-plan-a" />
        <FieldContent>
          <FieldLabel htmlFor="doc-plan-a">Starter</FieldLabel>
          <FieldDescription>For individuals.</FieldDescription>
        </FieldContent>
      </Field>
      <Field orientation="horizontal">
        <RadioGroupItem value="b" id="doc-plan-b" />
        <FieldContent>
          <FieldLabel htmlFor="doc-plan-b">Team</FieldLabel>
          <FieldDescription>For groups.</FieldDescription>
        </FieldContent>
      </Field>
    </RadioGroup>
  </Box>
)

export const SwitchExample = () => (
  <Box>
    <Field orientation="horizontal">
      <FieldContent>
        <FieldLabel htmlFor="doc-airplane">Airplane mode</FieldLabel>
        <FieldDescription>Turns off all wireless radios.</FieldDescription>
      </FieldContent>
      <Switch id="doc-airplane" />
    </Field>
  </Box>
)

export const SelectExample = () => (
  <Box>
    <Select>
      <SelectTrigger className="w-48" aria-label="Fruit">
        <SelectValue placeholder="Pick a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </Box>
)

export const DialogExample = () => (
  <Box>
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose render={<Button />}>Save</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </Box>
)

export const AlertDialogExample = () => (
  <Box>
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>Delete account</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </Box>
)

export const TooltipExample = () => (
  <Box>
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>Hover me</TooltipTrigger>
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  </Box>
)

export const PopoverExample = () => (
  <Box>
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  </Box>
)

export const DropdownMenuExample = () => (
  <Box>
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline" />}>Open menu</DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>My account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </Box>
)
