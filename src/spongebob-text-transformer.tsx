import { Action, ActionPanel, List } from "@vicinae/api";
import { useState } from "react";

export default function Command() {
	const [searchText, setSearchText] = useState("");

	function toSpongebobCase(text: string): string {
		return text
			.split("")
			.map((char) => (Math.random() > 0.5 ? char.toLowerCase() : char.toUpperCase()))
			.join("");
	}

	const transformedText = toSpongebobCase(searchText || "Spongebob Text Transformer");

	return (
		<List
			onSearchTextChange={setSearchText}
			searchBarPlaceholder="Type text to transform..."
			throttle={true}
		>
			<List.Item
				title={transformedText}
				icon="spongebob.jpg"
				actions={
					<ActionPanel>
						<Action.CopyToClipboard content={transformedText} />
						<Action.Paste content={transformedText} />
					</ActionPanel>
				}
			/>
		</List>
	);
}
